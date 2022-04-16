import React, { PureComponent } from "react";

class SessionForm extends PureComponent {
  state = {};
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
      >
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="techer">First Name</label>
          <input
            type="text"
            className="form-control"
            id="techer"
            aria-describedby="nameHelp"
          />
        </div>

        <div class="form-group">
          <label for="class">Example select</label>
          <select class="form-control" id="class">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="date"></label>
          <input type="date" id="date" name="date" />
        </div>

        <div class="form-group">
          <label htmlFor="start_time"></label>
          <input
            type="time"
            id="time"
            name="start_time"
            min="00:00"
            max="23:59"
            required
          />
        </div>

        <div class="form-group">
          <label htmlFor="end_time"></label>
          <input
            type="time"
            id="time"
            name="end_time"
            min="00:00"
            max="23:59"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary m-4">
          Save changes
        </button>
      </form>
    );
  }
}

export default SessionForm;
