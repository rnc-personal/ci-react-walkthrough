import React, { Component } from 'react'

export default class ConditionalClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h3>{ this.state.isLoaded ? "Loaded" : "Loading" }</h3>
                { this.state.isLoggedIn ? (
                    <h3>You are logged in!</h3>
                    ) :
                    (<h3>Login?</h3>)
                }
            </div>
        )
    }
}
