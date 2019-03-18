import React, { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./LoginForm/LoginForm"
import { LoginForm } from './LoginForm/LoginForm';


class App extends Component {
  render() {
    return (
      <div className="App">
            <LoginForm />
      </div>
    );
  }
}

export default App;
