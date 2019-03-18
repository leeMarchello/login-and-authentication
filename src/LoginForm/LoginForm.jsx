import React from "react";
import "bootstrap/dist/css/bootstrap.css"
export function LoginForm(props){
    return (
            <div>
                <div className="container">
                    <h1 className="text-center display-4">The login page</h1>
                            <div className="form-group">
                                <label className="text-center" for="username">Username:</label>
                                <input className="form-control" id="username" ></input>
                            </div>
                            <div className="form-group">
                                <label for="password" type="password">Password:</label>
                                <input className="form-control" type="password" id="password"></input>
                            </div>

                            <label class="btn btn-success">Sign in </label>
                </div>
            </div>
    );
}