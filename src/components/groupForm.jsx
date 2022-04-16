import React, { Component } from 'react';

class GroupForm extends Component {
    state = {  } 
    render() { 
        return (
            <form onSubmit={this.onSubmit} className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <h1>Add new group</h1>
        <div className="form-group">
          <label htmlFor="name">Email address</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter the group name"
          />
          <small id="emailHelp" className="form-text text-muted">
            The group name must be unique.
          </small>
        </div>
        
        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
        );
    }
}
 
export default GroupForm;