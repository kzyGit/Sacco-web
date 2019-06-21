import React, { Component } from 'react'
import { Line, Pie, Bar } from 'react-chartjs-2' //Line, Bar, Pie, dougnut
import { Button, ButtonGroup } from 'react-bootstrap';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            users1: '',
            Loans: 0,
            Savings: 0,
            view: 'line'
        }
    }

    componentDidMount = () => {
        let Loans = [], Savings = [], users = [], users1 = [], loan, saving, name;
        const { loans, savings } = this.props


        for (saving of savings.data.data) {
            name = saving.user.name.split(' ')[0]
            Savings.push(saving.amount)
            users.push(name)
        }

        for (loan of loans.data.data) {
            if (loan.status === 'pending') {
                Loans.push(loan.amount)
                users1.push(loan.user.first_name)
            }
        }

        this.setState({
            users,
            users1,
            Loans,
            Savings,
        })
    }

    line = () => {
        this.setState({ view: 'line' })
    }

    bar = () => {
        this.setState({ view: 'bar' })
    }

    pie = () => {
        this.setState({ view: 'pie' })
    }
    render() {

        const { users, users1, Loans, Savings, view } = this.state
        const chartData = {
            labels: users,
            datasets: [
                {
                    label: 'User savings',
                    data: Savings,
                    backgroundColor: ['maroon', 'green', 'yellow', 'orange', 'grey', 'pink', 'purple']
                },
                {
                    label: 'User Loans',
                    data: Loans,
                    backgroundColor: ['orange', 'green', 'yellow', 'orange', 'maroon', 'pink', 'purple']
                }
            ]
        }
        return (
            <div style={{ textAlign: 'left' }} ><br />
                    <h5> Loans and Savings Reports</h5>

                    <ButtonGroup id='chart'>
                        <Button onClick={this.line}>Line</Button>
                        <Button onClick={this.bar}>Bar</Button>
                        <Button onClick={this.pie}>Pie</Button>
                    </ButtonGroup>

                    {view === 'line' && <Line
                        data={chartData}
                        options={{
                            maintainAspectRatio: false
                        }} />}
                    {view === 'bar' && <Bar
                        data={chartData}
                        options={{
                            maintainAspectRatio: false
                        }} />}
                    {view === 'pie' && <Pie
                        data={chartData}
                        options={{
                            maintainAspectRatio: false
                        }} />}

            </div>


        )
    }
}

export default Reports;