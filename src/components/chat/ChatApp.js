import React, { Component } from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import aws_exports from "./config";
import logo from "./logo.svg";
import "./Chat.css";
import ChatWindow from "./ChatWindow";

Amplify.configure(aws_exports);

class ChatApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ChatWindow {...this.props} />
      </div>
    );
  }
}

export default withAuthenticator(ChatApp, { includeGreetings: true }, false);
