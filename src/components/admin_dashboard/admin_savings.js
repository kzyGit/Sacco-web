import React, { Component, Fragment } from 'react'
import { Table, Button } from 'react-bootstrap';

class Savings extends Component {
    render() {
        const { savings } = this.props
        console.log("****", savings)

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Savings <Button onClick={this.addsavings}>+</Button></h4><br />


                <b>Total Savings: </b> {savings.data.total_savings}<br /><br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Savings Mode</th>
                        </tr>
                    </thead>
                    <tbody>

                        {savings.data.data && <Fragment>
                            {savings.data.data.map(saving => (
                                <tr key={saving.id}>
                                    <td>{saving.id}</td>
                                    <td>{saving.user.first_name}</td>
                                    <td>{saving.amount}</td>
                                    <td>{saving.created_at}</td>
                                    <td>{saving.mode}</td>
                                </tr>))}
                        </Fragment>}


                    </tbody>
                </Table>


            </div>
        )
    }
}

export default Savings;