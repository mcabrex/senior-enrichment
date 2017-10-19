import React, {Component} from 'react';
import axios from 'axios';


export default class DeleteStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
      studentToDelete: props.delete
    };
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent(){
    const id = this.state.studentToDelete;
    axios.delete(`api/students/${id}`)
    .then(res => {
        return res.data;
      })
    .catch(err => {
      console.log('ERROR',err)
    })
  }

  render(){
		return (
      <button onClick={this.deleteStudent}>X</button>
		);
	}

}
