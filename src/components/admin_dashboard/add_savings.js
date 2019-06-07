import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import { userActions } from '../../actions'

class AddSavings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            amount: 1,
        }
    }

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }
    addsavings = event => {
        this.setState({ submitted: true })
        const { id, amount } = this.state;
        const { dispatch } = this.props
        if(id && amount) {
            // dispatch(userActions.addsavings(id, amount))
            console.log("**** Yeeeeeei")
        }

    }
    render() {
        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <div className="login">
                    <h2>{'Add Savings'}</h2><br />

                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">User ID</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="user id"
                                    onChange={this.handleChange('id')} 
                                    value={this.state.id}/>
                                
                            </Col>
                        </Form.Group><br />

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">Amount</Form.Label>
                            <Col sm="8">
                                <Form.Control placeholder="amount"
                                    value={this.state.amount}
                                    onChange={this.handleChange('amount')} 
                                    type='text'
                                    />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button onClick={(event) => { this.addsavings() }}>Submit</Button>
                </div>


            </div>
        )
    }
}

export default AddSavings;