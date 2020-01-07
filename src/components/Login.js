import React, { Component } from "react";

class Login extends Component {
    state = { 
        username: this.props.username, 
        password: this.props.password
    }

    render() {
        const { username, password } = this.state

        return(
            <>
                <h3>Username</h3>
                <input 
                    type="text"
                    value={ username }
                />

                <h3>Password</h3>
                <input 
                    type="text"
                    value={ password }
                />
            </>
        )
    }
    
    static defaultProps = {
        username: "Guest",
        password: "123456"
    }
}

export default Login;