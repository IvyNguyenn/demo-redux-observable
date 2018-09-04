import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PingPong from "./components/PingPong";
import Couter from "./components/Couter";
import User from "./components/User";
import UpDown from "./components/UpDown";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <PingPong />
                <hr />
                <Couter />
                <hr />
                <User />
                <hr />
                <UpDown />
            </div>
        );
    }
}

export default App;
