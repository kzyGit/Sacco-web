import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { addUserSavings } from '../../actions/loans_actions'
import { connect } from 'react-redux'

class AddSavings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            amount: '',
        }
    }

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }
    addsavings = (user_id, savings) => {
        const { id, amount } = this.state;
        const { addUserSavings, addSavings } = this.props
        if (id && amount) {
            addUserSavings(user_id, savings);
            if (!addSavings.data) {
                alert("Error on adding savings")
            }
            else {
                window.location.reload();
                alert("Savings added successfully")
                
            }
        }
    }
    render() {
        const { id, amount } = this.state;
        const { users } = this.props
        return (
            <div style={{ textAlign: 'left' }} id='add_savings'>
                <b> Add Savings</b><br /><br />

                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">User</Form.Label>
                        <Col sm="8">
                            <Form.Control as="select" placeholder="user id"
                                onChange={this.handleChange('id')}>
                                <option></option>
                                {users.data.map(user => (
                                    <option key={user.id} value={user.id}>{user.first_name} {user.first_name} {user.first_name}</option>
                                ))}
                            </Form.Control>

                        </Col>
                    </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">Amount</Form.Label>
                    <Col sm="8">
                        <Form.Control placeholder="amount"
                            value={this.state.amount}
                            onChange={this.handleChange('amount')}
                            type='number'
                        />
                    </Col>
                </Form.Group>
                </Form>
            <Button onClick={this.addsavings.bind(this, id, amount)}>Submit</Button>

            </div >
        )
    }
}

const mapStateToProps = state => ({
    addSavings: state.addSavings,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    addUserSavings: (user_id, savings) => dispatch(addUserSavings(user_id, savings))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddSavings);