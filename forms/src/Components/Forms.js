import React from "react";

const Forms = (props) => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            maxLength="200"
            onChange={props.input}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            maxLength="200"
            onChange={props.input}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>

          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            required
            maxLength="13"
            onChange={props.input}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="22"
            rows="5"
            required
            maxLength="1000"
            onChange={props.input}
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" required onChange={props.input}>
            <option value="" defaultValue disabled hidden>
              Select
            </option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </div>
        <button type="submit" onClick={props.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
