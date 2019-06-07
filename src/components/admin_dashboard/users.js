import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class Users extends Component {
    render() {
        const { users } = this.props

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Users</h4><br />

                {/* <b>Total Savings: </b> {userSavings.data.total_savings}<br /><br /> */}

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ID number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name} {user.middle_name} {user.sur_name} </td>
                            <td>{user.email}</td>
                            <td>{user.id_number}</td>
                        </tr>))}
                    </tbody>
                </Table>


            </div>
        )
    }
}

export default Users;