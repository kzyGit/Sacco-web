import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap';

class Repayments extends Component {

    render() {
        const { userLoanRepayment } = this.props
        const repayment_record = userLoanRepayment.data.repayment_record
        const repayment = userLoanRepayment.data.total_repayments
        return (
            <div style={{ textAlign: 'left' }} id='loans'>

                <div id="repayments"><h4> Repayment Details </h4><br />
                    {!repayment && <p>You have not made any repayments yet<br /></p>}
                    {repayment &&
                        <div>
                            Total Amount repaid:{userLoanRepayment.data.total_repayments}<br /><br />
                            Breakdown:<br /><br />

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Amount</th>
                                        <th>Date Repayed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {repayment && <Fragment>
                                        {repayment_record.map(pay => (
                                            <tr key={pay.id}>
                                                <td>{pay.amount}</td>
                                                <td>{pay.amount}</td>
                                                <td>{pay.created_at}</td>
                                            </tr>))}
                                    </Fragment>}
                                </tbody>
                            </Table><br />

                        </div>}


                </div></div>
        )
    }
}

export default Repayments;