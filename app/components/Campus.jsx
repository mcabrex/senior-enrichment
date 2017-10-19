import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Campus extends Component {
  constructor(){
    super();
    this.state = {
      campus: {},
      students: []
    }
  }

  componentDidMount(){
    axios.get(`/api/campus/${this.props.match.params.campusId}`)
      .then(res=>res.data)
      .then(campus=>{
        this.setState({campus});
        this.setState({students:campus.Students})
      })
      .catch(err=>{
        console.log("ERROR",err)
      })
  }

  render(){
    const campus = this.state.campus
    const students = this.state.students
    console.log('students',students)
    return(
      <div>
        <div>{campus.name}</div>
        {students.map(student=>{
          return(
            <div key={student.id}>
              <Link key={student.id} to={`/students/${student.id}`}>
                {student.name}
              </Link>
            </div>
          )
        })}

      </div>
    )
  }
}
