import React, { Component } from 'react'
import { Table, Accordion, Card, Button, ButtonToolbar, Overlay, Popover, Form, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loadLoanRepayment, updateUserLoan, deleteUserLoan } from '../../actions/loans_actions'
import Repayments from './repayments'


class Loans extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            repayments: false,
            show: false,
        };
    }
    editloan = (id, amount, event) => {
        const target = event.target
        this.setState({
            target,
            show: !this.state.show,
            id,
            amount
        });
    };
    updateloan = (id, amount, e) => {
        e.preventDefault();
        this.props.updateUserLoan(id, amount)
        alert("Loan updated successfully")
        window.location.reload();
    };

    deleteloan = (id, e) => {
        e.preventDefault();
        this.props.deleteUserLoan(id)
        alert("Loan deleted successfully")
        window.location.reload();
    };

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }

    handleclose = () => {
        this.setState({
            show: false
        });
    }
    showrepayments = (id, amount, e) => {
        e.preventDefault();
        this.props.loadLoanRepayment(id);
        this.setState({
            repayments: true,
            amount
        })
    }
    close = () => {
        this.setState({
            repayments: false
        })
    }
    render() {
        const { userLoan, userLoanRepayment, admin } = this.props
        const { repayments, id, amount } = this.state
        let loans = userLoan.data.error ? false : true

        const loan = userLoan.data;
        let completed_loans = [];
        let pending_loans = []

        if (loans) {
            for (const one_loan of loan) {
                if (one_loan.status === 'pending') {
                    pending_loans.push(one_loan)
                }
                else if (one_loan.status === 'completed') {
                    completed_loans.push(one_loan)

                }
            }
        }
        return (
            <div style={{ textAlign: 'left' }} id='loans'>
                <h4> Loans</h4><br />
                {(!loans || !pending_loans.length) && <p id='no_loan'>No pending loans: </p>}
                {loans && pending_loans.length > 0 &&
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Date Approved</th>
                                    <th>To repay</th>
                                    <th>Repayment</th>
                                    {admin && <th>Edit</th>}
                                    {admin && <th>Delete</th>}
                                </tr>
                            </thead>
                            <tbody>

                                {pending_loans.map(loan => (
                                    <tr key={loan.id}>
                                        <td>{pending_loans.indexOf(loan) + 1}</td>
                                        <td style={{ color: 'green' }}>Active</td>
                                        <td>{loan.amount}</td>
                                        <td>{new Date(loan.created_at).toLocaleString().split(',')[0]}</td>
                                        <td>{loan.amount * 1.04}</td>
                                        <td><Button onClick={this.showrepayments.bind(this, loan.user.id, loan.amount)}>View</Button></td>
                                        {admin && <td><i onClick={this.editloan.bind(this, loan.id, loan.amount)} className="fa fa-edit"></i><br /></td>}
                                        {admin && <td><i onClick={this.deleteloan.bind(this, loan.id)} className="fa fa-trash"></i><br /></td>}
                                    </tr>))}
                            </tbody>
                        </Table><br />
                        <ButtonToolbar>

                            <Overlay
                                show={this.state.show}
                                target={this.state.target}
                                placement="bottom"
                                container={this}
                                containerPadding={20}
                            >
                                <Popover style={{ backgroundColor: '#b39b9b' }} title="Update Saving">
                                    <Form><br />

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">Amount</Form.Label>
                                            <Col sm="8">
                                                <Form.Control placeholder="amount"
                                                    value={amount}
                                                    onChange={this.handleChange('amount')}
                                                    type='text'
                                                />
                                            </Col>
                                        </Form.Group><br />
                                    </Form>
                                    <Button onClick={this.updateloan.bind(this, id, amount)}>Update</Button>
                                    <Button style={{ float: 'right' }} onClick={this.handleclose}>Close</Button>
                                </Popover>
                            </Overlay>
                        </ButtonToolbar>

                    </div>}

                {repayments &&
                    <div>
                        <i class="fa fa-window-close" id="closebtn" onClick={(event) => { this.close() }} aria-hidden="true"></i>
                        <Repayments userLoanRepayment={userLoanRepayment} amount={amount}/></div>}

                {loans && completed_loans.length > 0 &&

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <h4> Completed Loans</h4>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Amount</th>
                                            <th>Date Requested</th>
                                            <th>Repayed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {completed_loans.map(loan => (

                                            <tr key={loan.id}>
                                                <td>1</td>
                                                <td>{loan.amount}</td>
                                                <td>{new Date(loan.created_at).toLocaleString().split(',')[0]}</td>
                                                <td>{loan.amount * 1.04}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    userLoanRepayment: state.userLoanRepayment,
    userLoanUpdate: state.userLoanUpdate,
    deleteUserLoan: state.deleteUserLoan
})

const mapDispatchToProps = () => ({
    loadLoanRepayment,
    updateUserLoan,
    deleteUserLoan,
})
export default connect(mapStateToProps, mapDispatchToProps)(Loans);