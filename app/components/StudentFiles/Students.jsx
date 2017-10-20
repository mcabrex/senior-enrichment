import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';


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
      <div className="studentList">
        <Link to='students/addStudent'>
          <button>+</button>
        </Link>
        <table>
          <tbody >
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Campus</th>
                <th>Update</th>
                <th>X</th>
              </tr>
              {students.map((student,index)=>{
                return(
                  <tr key={student.id}>
                    <td>
                      {index}
                    </td>
                    <td>
                      <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </td>
                    <td>
                      <Link to={`/campus/${student.Campus.id}`}>{student.Campus.name}</Link>
                    </td>
                    <td>
                      <Link to={`/students/${student.id}/updateStudent`}>
                        <button>-</button>
                      </Link>
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
