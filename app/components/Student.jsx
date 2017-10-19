import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Student extends Component {
  constructor(){
    super()
    this.state={
      student: {},
      campus: {}
    }
  }

  componentDidMount(){
    axios.get(`/api/students/${this.props.match.params.studentId}`)
      .then(res=>res.data)
      .then(student=>{
        this.setState({student})
        this.setState({campus:student.Campus})
      })
      .catch(err=>{
        console.log("ERROR",err)
      })
  }

  render(){
    const student = this.state.student
    const campus = this.state.campus
    console.log('da stud',student)
    return(
      <div>
        <div>{student.name}</div>
        <div>{student.email}</div>
        <Link to={`/campus/${campus.id}`}>
          <div>{campus.name}</div>
        </Link>


      </div>
    )
  }
}
