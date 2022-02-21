import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    LogMeIn = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    render() {
            return (
                <div>
                    {this.state.isLoggedIn && <div><h1>Welcome Abhinav</h1></div>}
                    <button onClick={this.LogMeIn}>Login</button>
                </div>
            )
    }
}

export default UserGreeting