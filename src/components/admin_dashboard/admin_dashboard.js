import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../footer'
import Header from '../header'
import Loans from './admin_loans'
import Savings from './admin_savings'
import Users from './users'
import Reports from './admin_reports'
import { Button, ButtonGroup } from 'react-bootstrap';
import { history } from '../../helpers';
import { loadUserLoan, loadUserSavings, loadUsers } from '../../actions/loans_actions'

class AdminDashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            view: 'users'
        };
    }
    componentDidMount() {
        if (!localStorage.getItem('auth')) {
            history.push('/');
        }
        this.props.loadUsers();
        this.props.loadUserLoan();
        this.props.loadUserSavings();
    }
    users = () => {
        this.setState({ view: 'users' })
    }
    
    savings = () => {
        this.setState({ view: 'savings' })
    }

    loans = () => {
        this.setState({ view: 'loans' })
    }

    reports = () => {
        this.setState({ view: 'reports' })
    }
    render() {
        const { userLoan, userSavings, users } = this.props
        const { view } = this.state
        return (
            <div className="home">
                <Header />
                <div className="dashboard">
                    <h4> Admin Dashboard</h4>

                    <ButtonGroup id='nav'>
                        <Button onClick={this.users}>Users</Button>
                        <Button onClick={this.savings}>Savings</Button>
                        <Button onClick={this.loans}>Loans</Button>
                        <Button onClick={this.reports}>Reports</Button>
                    </ButtonGroup>

                    {view === 'users' && <Users users={users} />}
                    {view === 'savings' && <Savings savings={userSavings} />}
                    {view === 'loans' && <Loans userLoan={userLoan} />}
                    {view === 'reports' && <Reports loans={userLoan} savings={userSavings} />}
                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userLoan: state.userLoan,
    userSavings: state.userSavings,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    loadUserLoan: () => dispatch(loadUserLoan()),
    loadUserSavings: () => dispatch(loadUserSavings()),
    loadUsers: () => dispatch(loadUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);