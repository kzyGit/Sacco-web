import React, { Component } from 'react';
import './App.css';
import '../src/components/css/styles.css'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers';
import { PrivateRoute } from './components';
import Home from './components/home/home'
import Login from './components/login/login'
import Dashboard from './components/user_dashboard/dashboard'
import AdminDashboard from './components/admin_dashboard/admin_dashboard'
import axios from 'axios'

axios.defaults.withCredentials = true;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history} >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/admin_dashboard' component={AdminDashboard} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
