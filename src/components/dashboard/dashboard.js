import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../footer'
import Header from '../header'
import Loans from './loans'
import Savings from './savings'
import { Button, ButtonGroup } from 'react-bootstrap';
import { history } from '../../helpers';
import { loadUserLoan , loadUserSavings} from '../../actions/loans_actions'

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
        this.props.loadUserLoan();
        this.props.loadUserSavings();
    }
    savings = () => {
        this.setState({ savings: true })
    }

    loans = () => {
        this.setState({ savings: false })
    }
    render() {
        const {userLoan, userSavings} = this.props
        return (
            <div className="home">
                <Header />
                <div className="dashboard">
                    <h4> User Dashboard</h4>

                    <ButtonGroup id='nav'>
                        <Button onClick={this.savings}>Savings</Button>
                        <Button onClick={this.loans}>Loans</Button>
                    </ButtonGroup>

                    {this.state.savings && <Savings userSavings={userSavings}/>}
                    {!this.state.savings && <Loans userLoan={userLoan}/>}
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
    loadUserLoan: () => dispatch(loadUserLoan()),
    loadUserSavings: () => dispatch(loadUserSavings())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);