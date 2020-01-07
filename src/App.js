import React, { Component } from "react";
import Login from "./components/Login"
import IdCard from "./components/IdCard";

class App extends Component {
    render() {
        return(
            <>
            <h1>Login page</h1>
            <Login/>
            </>
        )
    }
}

export default App;