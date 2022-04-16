import React, { PureComponent } from 'react';
import "../css/login.css";

class LoginForm extends PureComponent {
    state = {  } 
    render() { 
        return (
            <div id="login" className="w-100 h-100 d-flex flex-column justify-content-center p-4">
            <form onSubmit={this.onSubmit} className="d-flex flex-column justify-content-center align-items-center bg-white w-50 h-75" id="login_form">
            <div className="form-group w-75">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-75">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
            
          </form>
          </div>
        );
    }
}
 
export default LoginForm;