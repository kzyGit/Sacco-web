import React, { Component, Fragment } from 'react'
import { Table, Button, ButtonToolbar, Overlay, Popover, Form, Col, Row } from 'react-bootstrap';
import { updateUserSavings, deleteUserSavings } from '../../actions/loans_actions'
import { connect } from 'react-redux'

class Savings extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }
    editsaving = (id, amount, event) => {
        const target = event.target
        this.setState({
            target,
            show: !this.state.show,
            id,
            amount
        });
    };

    updateSavings = (id, amount, e) => {
        e.preventDefault();
        this.props.updateUserSavings(id, amount)
        alert(" Saving updated successfully")
        window.location.reload();
    };

    deletesaving = (id, e) => {
        e.preventDefault();
        this.props.deleteUserSavings(id)
        alert(" Saving deleted successfully")
        window.location.reload();
    };

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }

    handleclose = () => {
        this.setState({
            show: false
        });
    }
    render() {
        const { userSavings, admin } = this.props

        const total = userSavings.data.total_savings

        const {id, amount} = this.state

        return (
            <div style={{ textAlign: 'left' }} id='savings'>
                <h4> Savings</h4><br />

                {!total && <p>No savings recorded yet</p>}
                {total && <div>
                    <b>Total Savings: </b> {userSavings.data.total_savings}<br /><br />

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Savings Mode</th>
                                {admin && <th>Edit</th>}
                                {admin && <th>Delete</th>}
                            </tr>
                        </thead>
                        <tbody>

                            {userSavings.data.data && <Fragment>
                                {userSavings.data.data.map(saving => (
                                    <tr key={saving.id}>
                                        <td>{userSavings.data.data.indexOf(saving) + 1}</td>
                                        <td>{saving.amount}</td>
                                        <td>{new Date(saving.created_at).toLocaleString().split(',')[0]}</td>
                                        <td>{saving.mode}</td>
                                        {admin && <td><i onClick={this.editsaving.bind(this, saving.id, saving.amount)} className="fa fa-edit"></i></td>}
                                        {admin && <td> <i onClick={this.deletesaving.bind(this, saving.id)} className="fa fa-trash"></i></td>}
                                    </tr>))}
                            </Fragment>}


                        </tbody>
                    </Table></div>}

                <ButtonToolbar>

                    <Overlay
                        show={this.state.show}
                        target={this.state.target}
                        placement="bottom"
                        container={this}
                        containerPadding={20}
                    >
                        <Popover style={{backgroundColor:'#b39b9b'}} title="Update Saving">
                            <Form><br />

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">Amount</Form.Label>
                                    <Col sm="8">
                                        <Form.Control placeholder="amount"
                                            value={amount}
                                            onChange={this.handleChange('amount')}
                                            type='text'
                                        />
                                    </Col>
                                </Form.Group><br />
                            </Form>
                            <Button onClick={this.updateSavings.bind(this, id, amount)}>Update</Button>
                            <Button style={{float: 'right'}} onClick={this.handleclose}>Close</Button>
                        </Popover>
                    </Overlay>
                </ButtonToolbar>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    userSavings: state.userSavings,
    userSavingsUpdate: state.userSavingsUpdate,
    deleteUserSaving: state.deleteUserSaving
})

const mapDispatchToProps = dispatch => ({
    updateUserSavings: (id, amount) => dispatch(updateUserSavings(id, amount)),
    deleteUserSavings: (id) => dispatch(deleteUserSavings(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Savings);