import React, { Component } from 'react'
import { Table, Accordion, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loadLoanRepayment } from '../../actions/loans_actions'
import Repayments from '../user_dashboard/repayments'
import { Link } from 'react-router-dom'


class Loans extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            repayments: false
        };
    }

    showrepayments = (id, e) => {
        e.preventDefault();
        this.props.loadLoanRepayment(id);
        this.setState({
            repayments: true
        })
    }
    close = () => {
        this.setState({
            repayments: false
        })
    }
    render() {
        const { userLoan, userLoanRepayment } = this.props
        const { repayments } = this.state
        let loans = userLoan.data.error ? false : true

        const all_loans = userLoan.data.data;
        let completed_loans = [];
        let pending_loans = [];

        if (loans) {
            for (const one_loan of all_loans) {
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
                {(!loans || !pending_loans) && <p>No pending loans: </p>}
                {loans && pending_loans &&
                    <div>
                        <h4> Pending Loans</h4><br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Member</th>
                                    <th>Amount</th>
                                    <th>Date Approved</th>
                                    <th>To repay</th>
                                    <th>Repayed</th>
                                    <th>Details</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>

                                {pending_loans.map(loan => (

                                    <tr key={loan.id}>
                                        <td>{pending_loans.indexOf(loan) + 1}</td>
                                        <td><Link to={{
                                            pathname: '/dashboard',
                                            state: {
                                                id: loan.user.id,
                                                name: loan.user.first_name + " " + loan.user.middle_name + " " + loan.user.sur_name
                                            }
                                        }} id="user_link">{loan.user.first_name} {loan.user.middle_name} {loan.user.sur_name} </Link></td>
                                        <td>{loan.amount}</td>
                                        <td>{new Date(loan.created_at).toLocaleString().split(',')[0]}</td>
                                        <td>{loan.amount * 1.04}</td>
                                        <td>{loan.amount / 2}</td>
                                        <td><Button onClick={this.showrepayments.bind(this, loan.user.id)}>View</Button></td>
                                        <td><Button>Update</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table><br />

                    </div>}

                {repayments &&
                    <div>
                        <Button style={{ float: 'right' }} onClick={(event) => { this.close() }}>close</Button><Repayments userLoanRepayment={userLoanRepayment} /></div>}

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
                                            <th>Member</th>
                                            <th>Amount</th>
                                            <th>Date Requested</th>
                                            <th>Repayed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {completed_loans.map(loan => (

                                            <tr key={loan.id}>
                                                <td>{completed_loans.indexOf(loan) + 1}</td>
                                                <td>{loan.user.first_name} {loan.user.middle_name} {loan.user.sur_name}</td>
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
    userLoanRepayment: state.userLoanRepayment
})

const mapDispatchToProps = dispatch => ({
    loadLoanRepayment: (id) => dispatch(loadLoanRepayment(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Loans);