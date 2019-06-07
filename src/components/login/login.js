import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { history } from '../../helpers';
import { userActions } from '../../actions'
import Footer from '../footer'
import Header from '../header'
import { Form, Col, Row, Button } from 'react-bootstrap'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('auth')) {
            history.push('/');
        }
    }
    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }
    login = event => {
        this.setState({ submitted: true })
        const { username, password } = this.state;
        const { dispatch } = this.props
        if(username && password) {
            dispatch(userActions.login(username, password))
        }

    }
    render() {
        return (
            <div className="home">
                <Header />
                <div className="login">
                    <h2>{'Login'}</h2><br />

                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">Email</Form.Label>
                            <Col sm="8">
                                <Form.Control type="email" placeholder="email"
                                    onChange={this.handleChange('username')} 
                                    value={this.state.username}/>
                                
                            </Col>
                        </Form.Group><br />

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">Password</Form.Label>
                            <Col sm="8">
                                <Form.Control placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')} 
                                    type='password'
                                    />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button onClick={(event) => { this.login() }}>Login</Button>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(Login));