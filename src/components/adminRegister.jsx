import React, { Component } from 'react';

class AdminRegister extends Component {
  state = {};
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-50 h-100"
      >
        <div className="form-group">
          <label htmlFor="name">Email address</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter full name"
          />
          <small id="nameHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Password</label>
          <input
            name="confirm_password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary m-4">
          Sign up
        </button>
      </form>
    );
  }
}

export default AdminRegister;
