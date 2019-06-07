import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'
const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="content">
                    <h2>Our sacco, my sacco.</h2><br />
                    <h2>Saving and investing the little I have today for the benefit of my tomorrow</h2><br />
                    <h2>Stronger Together</h2>
                </div>
                <Footer />
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(withStyles(styles)(Home)));