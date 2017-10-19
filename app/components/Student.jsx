import React, { Component } from 'react';

export default class Student extends Component {
  constructor(){
    super()
    this.state={
      student: {}
    }
  }

  componentDidMount(){
    console.log('hello',this.props.match.params)
    axios.get(`/api/students/${this.props.match.params}`)
      .then(res=>res.data)
      .then(student=>{
        this.setState({student})
      })
      .catch(err=>{
        console.log("ERROR",err)
      })
  }
  render(){
    return(
      <div>This is a student</div>
    )
  }
}
