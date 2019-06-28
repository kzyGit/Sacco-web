import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../footer'
import Header from '../header'
import Loans from './loans'
import Savings from './savings'
import { Button, ButtonGroup } from 'react-bootstrap';
import { history } from '../../helpers';
import { loadUserLoan, loadUserSavings } from '../../actions/loans_actions'

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            savings: true
        };
    }
    componentDidMount() {
        if (!localStorage.getItem('auth')) {
            history.push('/');
        }


        if (localStorage.getItem('role') === 'admin') {
            const {id} = this.props.location.state
            this.props.loadUserLoan(id);
            this.props.loadUserSavings(id);
        }
        else {
            this.props.loadUserLoan();
            this.props.loadUserSavings();
        }


    }
    savings = () => {
        this.setState({ savings: true })
    }

    loans = () => {
        this.setState({ savings: false })
    }
    admin = () => {
        history.push('/admin_dashboard');
    }
    render() {
        const admin = localStorage.getItem('role') === 'admin' ? true : false
        const { userLoan, userSavings } = this.props
        return (
            <div className="home">
                <Header />
                <div className="dashboard">

                    {admin && <div><h4> Admin Dashboard</h4>

                        <br /><b>Member's page: </b><span id="user_link">{this.props.location.state.name}</span></div>}

                    {!admin && <h4> User Dashboard</h4>}

                    <ButtonGroup id='nav'>
                    {admin && <Button onClick={this.admin}>Admin-Dashboard</Button>}
                        <Button onClick={this.savings}>Savings</Button>
                        <Button onClick={this.loans}>Loans</Button>
                    </ButtonGroup>

                    {this.state.savings && <Savings userSavings={userSavings} admin={admin}/>}
                    {!this.state.savings && <Loans userLoan={userLoan} admin={admin}/>}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userLoan: state.userLoan,
    userSavings: state.userSavings
})

const mapDispatchToProps = dispatch => ({
    loadUserLoan: (id) => dispatch(loadUserLoan(id)),
    loadUserSavings: (id) => dispatch(loadUserSavings(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);