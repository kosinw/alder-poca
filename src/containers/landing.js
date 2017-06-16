import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <section data-page="landing">
                <h1>Landing Page</h1>
                <button onClick={this.props.auth.signInWithGoogle}>Sign In</button>
                <button onClick={this.props.auth.signOut}>Sign Out</button>
                <Link to="/notes">Notes</Link>
            </section>
        );
    }
}

export default inject(stores => ({ auth: stores.auth }))(LandingPage);