import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';

class Repayments extends Component {

    render() {
        const { userLoanRepayment } = this.props
        return (
            <div style={{ textAlign: 'left' }} id='loans'>
           
            <div id="repayments"><h4> Repayment Details </h4><br />
                {/* {repayment === null && <p>You have not made any repayments yet<br /></p>} */}
                <p>You have not made any repayments yet<br /></p>

                {/* {repayment !== null && 
                <div>
                    Total Amount repaid:{repayment}<br />
                    Breakdown:<br />

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Date Repayed</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userLoanRepayment.data.map(payment =>(

                        <tr>
                            <td> {payment.id}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.amount}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table><br />
                    
                    </div>} */}


            </div></div>
        )
    }
}

export default Repayments;