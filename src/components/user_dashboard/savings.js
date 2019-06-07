import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap';

class Savings extends Component {
    render() {
        const { userSavings } = this.props

        const total = userSavings.data.total_savings

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Savings</h4><br />

                {!total && <p>You have no savings yet, reachout to admin to make your first saving.</p>}
                {total && <div>
                    <b>Total Savings: </b> {userSavings.data.total_savings}<br /><br />

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Savings Mode</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userSavings.data.data && <Fragment>
                                {userSavings.data.data.map(saving => (
                                    <tr key={saving.id}>
                                        <td>{saving.amount}</td>
                                        <td>{saving.created_at}</td>
                                        <td>{saving.mode}</td>
                                    </tr>))}
                            </Fragment>}


                        </tbody>
                    </Table></div>}




            </div>
        )
    }
}

export default Savings;