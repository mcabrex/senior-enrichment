import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render(){
    return(
      <div>

        <Link to="/students/studentTest/addStudent">
          <button>This is an add student button</button>
        </Link>

        <div>
          <h2># Name Campus</h2>

          <div>Student mapping func</div>

          <Link to='/students/studentTest'>
            <div>Student Name</div>
          </Link>

          <div>Student Email</div>

          <Link to='/campusTest'>
            <div>Student Campus</div>
          </Link>

          <button>This is a delete student button</button>

        </div>
      </div>
    )
  }
}
