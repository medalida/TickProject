import React, { PureComponent } from 'react';

class StudentForm extends PureComponent {
    state = {  }
    
    render() { 
        return (
            <form
        onSubmit={this.onSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-50 h-100"
      >
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            aria-describedby="nameHelp"
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            aria-describedby="nameHelp"
            placeholder="Enter last name"
          />
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
          
        </div>
        
        <button type="submit" className="btn btn-primary m-4">
          Save changes
        </button>
      </form>
        );
    }
}
 
export default StudentForm;