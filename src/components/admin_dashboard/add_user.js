import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { addNewUser } from '../../actions/loans_actions'
import { connect } from 'react-redux'

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            middlename: '',
            surname: '',
            email: '',
            id_number: ''
        }
    }

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }

    adduser = (user_id, savings) => {
        const { firstname, middlename, surname, email, id_number } = this.state;

        const user = {
            first_name: firstname,
            middle_name: middlename,
            sur_name: surname,
            email: email,
            id_number: id_number
        }
        const { addNewUser } = this.props
        if (firstname && middlename && surname && email && id_number) {
            addNewUser(user);
            window.location.reload();
            alert("User added successfully")
        }
    }
    render() {
        const { firstname, middlename, surname, email, id_number } = this.state;
        return (
            <div style={{ textAlign: 'left' }} id='add_savings'>
                <b> Add User</b><br /><br />
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Firstname</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="firstname"
                                onChange={this.handleChange('firstname')}>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Middlename</Form.Label>
                        <Col sm="8">
                            <Form.Control placeholder="middlename"
                                onChange={this.handleChange('middlename')}
                                type='text'
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Surname</Form.Label>
                        <Col sm="8">
                            <Form.Control placeholder="surname"
                                onChange={this.handleChange('surname')}
                                type='text'
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">Email</Form.Label>
                        <Col sm="8">
                            <Form.Control placeholder="email"
                                onChange={this.handleChange('email')}
                                type='text'
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">ID Number</Form.Label>
                        <Col sm="8">
                            <Form.Control placeholder="id_number"
                                onChange={this.handleChange('id_number')}
                                type='number'
                            />
                        </Col>
                    </Form.Group>
                </Form>
                <Button onClick={this.adduser.bind(this, firstname, middlename, surname, email, id_number)}>Submit</Button>

            </div >
        )
    }
}

const mapStateToProps = state => ({
    newUser: state.newUser,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    addNewUser: (user) => dispatch(addNewUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);