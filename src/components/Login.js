import React, { Component } from "react";

class Login extends Component {

    onInputChange = (event) => {
        const { onLoginChange } = this.props;
        const value = event.target.value;
        const name = event.target.name;

        onLoginChange({ [name]: value })
    }

    render() {
        const { username, email, } = this.props;

        return(
            <>
                <h3>Username</h3>
                <input 
                    type="text"
                    value={ username }
                    onChange={ this.onInputChange } 
                    name="username"
                />

                <h3>Email</h3>
                <input 
                    type="text"
                    value={ email }
                    onChange={ this.onInputChange }
                    name="email"
                />
            </>
        )
    }

    static defaultProps = {
        username: "Guest",
        email: "guest@example.com"
    }
}

export default Login;