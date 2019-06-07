import React, { Component } from 'react'
import { Container, Row, Col, Button, Navbar, Image, DropdownButton, ButtonGroup } from 'react-bootstrap';
import logo from '../components/Images/logo.jpg'

class Header extends Component {

    logout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        alert('Logout successful')
    }

    
    render() {
        let dashboard = '';
        if(localStorage.getItem('role') === 'admin'){
            dashboard = '/admin_dashboard'
        }
        else {
            dashboard = '/dashboard'
        }
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col id="col" sm={3}>
                            <p>
                                <Navbar.Brand id='logo' href="/"><Image src={logo} roundedCircle />{'  Njokeriosacco'}</Navbar.Brand>
                            </p></Col>
                        <Col id="col" sm={6}></Col>
                        <Col id="col" sm={3} >
                        <ButtonGroup id='nav'>
                            <Button><a href="/">Home</a></Button>
                            <Button><a href="/">Reach us</a></Button>
                            {localStorage.getItem('auth') && 

                            <DropdownButton as={ButtonGroup} title="User">
                                <Button id='dropnav' ><a href={dashboard} >Dashboard</a></Button>
                                <Button id='dropnav' onClick={() => { this.logout() }}><a href="/" >Logout</a></Button>
                                <Button id='dropnav' className="user" style={{color:'maroon'}}>** {localStorage.getItem('user')}</Button>
                            </DropdownButton>}


                            {!localStorage.getItem('auth') && <Button><a href="/login">Login</a></Button>}
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Header;