import React, { Component } from 'react'
import { Table, Accordion, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loadLoanRepayment } from '../../actions/loans_actions'
import Repayments from './repayments'


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
            repayments:false
        })
    }
    render() {
        const { userLoan, userLoanRepayment } = this.props
        const { repayments } = this.state
        let loans = userLoan.data.error ? false: true

        const userloan = userLoan.data;
        let completed_loans = [];
        let pending_loan

        if (loans){
            for(const one_loan of userloan){
            if(one_loan.status === 'pending'){
                pending_loan = one_loan
            } 
            else if (one_loan.status === 'completed'){
                completed_loans.push(one_loan)
                
            }
        }}
        return (
            <div style={{ textAlign: 'left' }} id='loans'>
            <h4> Loans</h4><br />
            {(!loans || !pending_loan)  && <p id='no_loan'>You have no pending loans: </p> }
            {loans && pending_loan &&
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Date Approved</th>
                            <th>To repay</th>
                            <th>Repayed</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td> <a style={{color:'#007bff'}} href="\">1</a></td>
                            <td style={{ color: 'green' }}>Active</td>
                            <td>{pending_loan.amount}</td>
                            <td>{pending_loan.created_at}</td>
                            <td>{pending_loan.amount * 1.04}</td>
                            <td>{pending_loan.amount/2}</td>
                            <th><Button onClick={this.showrepayments.bind(this, pending_loan.user.id)}>View</Button></th>
                        </tr>
                    </tbody>
                </Table><br />

                </div>}

                {repayments && 
                <div>
                    <Button style={{float:'right'}} onClick={(event) => { this.close() }}>close</Button><Repayments userLoanRepayment={userLoanRepayment}/></div>}

                {loans && completed_loans.length > 0  &&
                
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
                                    {completed_loans.map(loan =>(

                                        <tr key={loan.id}>
                                        <td>1</td>
                                        <td>{loan.amount}</td>
                                        <td>{loan.created_at}</td>
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