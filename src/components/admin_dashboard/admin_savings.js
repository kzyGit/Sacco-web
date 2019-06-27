import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap';
import AddSavings from './add_savings'
import { connect } from 'react-redux'
import { loadUserSavings } from '../../actions/loans_actions'
import { Link } from 'react-router-dom'


class Savings extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            addsavings: false,
            user: false
        };
    }

    addsavings = () => {
        this.setState({
            addsavings: !this.state.addsavings
        })
    }

    render() {
        const { savings} = this.props
        const { addsavings} = this.state

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Savings<i  id="add" onClick={this.addsavings} class="fa fa-plus-circle"></i></h4><br />
                {addsavings && <AddSavings />}
                <b>Total Savings: </b> {savings.data.total_savings} <br /><br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Member ID</th>
                            <th>Savings (Ksh)</th>
                        </tr>
                    </thead>
                    <tbody>

                        {savings.data && <Fragment>
                            {savings.data.data.map(saving => (
                                <tr key={savings.data.data.indexOf(saving)+1}>
                                    <td>{savings.data.data.indexOf(saving)+1}</td>
                                    <td><Link to={{
                                        pathname: '/dashboard',
                                        state: {
                                            id: saving.user.id,
                                            name: saving.user.name
                                        }
                                    }} id="user_link">{saving.user.name} </Link></td>
                                    <td>{saving.user.email}</td>
                                    <td>{saving.user.id}</td>
                                    <td>{saving.amount}</td>
                                </tr>))}
                        </Fragment>}


                    </tbody>
                </Table>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    userSavings: state.userSavings
})

const mapDispatchToProps = dispatch => ({
    loadUserSavings: (id) => dispatch(loadUserSavings(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Savings);