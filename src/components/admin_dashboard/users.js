import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Users extends Component {
    render() {
        const { users } = this.props

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Njokeriosacco Members</h4><br />

                Total: {users.data.length}<br /><br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Member ID</th>
                            <th>ID number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map(user => (
                            <tr key={user.id}>
                                <td>{users.data.indexOf(user) + 1}</td>
                                <td>
                                    <Link to={{
                                        pathname: '/dashboard',
                                        state: {
                                            id: user.id,
                                            name: user.first_name+ " "+user.middle_name+" "+user.sur_name
                                        }
                                    }} id="user_link">{user.first_name} {user.middle_name} {user.sur_name} </Link></td>
                                <td>{user.email}</td>
                                <td>{user.id}</td>
                                <td>{user.id_number}</td>
                            </tr>))}
                    </tbody>
                </Table>


            </div>
        )
    }
}

export default Users;