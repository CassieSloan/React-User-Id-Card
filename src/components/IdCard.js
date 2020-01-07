import React, { Component } from "react";

import Login from "./Login";

class IdCard extends Component {
    state = { username: "", email: ""}

    componentDidUpdate() {
        console.log(this.state.username);
        console.log(this.state.email);
    }

    onLoginChange = (data) => {
        this.setState(data);
    }
    
    render() {
        const { username } = this.state;
        const { email }= this.state;
        return(
            <>
                <div>
                    <Login
                        onLoginChange={this.onLoginChange}
                        username={ username }
                        email={ email }
                    />
                </div>
                <div className="card-container">
                    <h1>ID Card</h1>
                    <div className="image-container"></div>
                    <h3>Username</h3>
                    <h5 value={ username }>{`${ username }`}</h5>
                    <h3>Email</h3>
                    <h5 value={ email }>{`${ email }`}</h5>
                </div>
            </>
        )
    }
}

export default IdCard;