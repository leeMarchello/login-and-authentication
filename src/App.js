import React, { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
           <h1>The login page</h1>

            <div className="container">
                <div className="row">
                  <div className="col-2">
                    <label for="username">Username:</label>
                    <input value="username" ></input>
                  </div>
                </div>
            </div>

            <div >
              <label for="password" type="password">Password:</label>
              <input value="password"></input>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
