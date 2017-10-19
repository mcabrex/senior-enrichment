import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Header extends Component {
  constructor(){
    super();
    this.state={
      students: []
    }
  }

  componentDidMount(){
    axios.get('/api/students')
      .then(res=>res.data)
      .then(studentList=>{
        this.setState({students:studentList})
      })
      .catch(err=>{
        console.log('ERROR',err)
      })
  }

  render(){
    console.log('THIS IS THE STATE',this.state)
    const students = this.state.students
    return(
      <div>
        <Link to="/students/studentTest/addStudent">
          <button>This is an add student button</button>
        </Link>
        {students.map(student=>{
          return(
            <div key={student.id}>
              <Link to='/students/studentTest'>
              <h2>{student.name}</h2>
              </Link>
              <Link to='/campusTest'>
                <div>{student.Campus.name}</div>
              </Link>
              <button>This is a delete button</button>
            </div>
          )
        })}
      </div>
    )
  }
}
