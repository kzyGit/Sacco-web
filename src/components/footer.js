import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import g from './Images/g.png';
import f from './Images/f.jpeg';
import t from './Images/t.png';

class Footer extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col id="col" sm={5}></Col>
                        <Col id="col" sm={2} style={{ textAlign: 'center' }} >
                            <Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Image src={f} rounded />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Image src={t} rounded />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Image src={g} rounded />
                                    </Col>
                                </Row>
                            </Container></Col>
                        <Col id="col" sm={5} style={{ textAlign: 'right' }} >@kzyangiro</Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Footer;