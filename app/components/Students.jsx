import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteStudent from './DeleteStudent'


export default class Header extends Component {
  constructor(){
    super();
    this.state={
      students: [],
      studentDeleteId: ''
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
        <Link to='students/addStudent'>
          <button>+</button>
        </Link>
        <table>
          <tbody >
            <tr>
              <th>Name</th>
              <th>Campus</th>
              <th>X</th>
            </tr>
              {students.map(student=>{
                return(
                  <tr key={student.id}>
                    <td>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </td>
                    <td>
                    <Link to={`/campus/${student.Campus.id}`}>{student.Campus.name}</Link>
                    </td>
                    <td>
                    <DeleteStudent delete={student.id}/>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}
