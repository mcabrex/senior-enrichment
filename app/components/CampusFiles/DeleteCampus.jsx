import React, {Component} from 'react';
import axios from 'axios';


export default class DeleteCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
      campusToDelete: props.delete
    };
    this.deleteCampus = this.deleteCampus.bind(this)
  }

  deleteCampus(){
    const id = this.state.campusToDelete;
    console.log('id here',id)
    axios.delete(`api/campus/${id}`)
    .then(res => {
        return res.data;
      })
    .catch(err => {
      console.log('ERROR',err)
    })
  }

  render(){
		return (
      <button onClick={this.deleteCampus}>X</button>
		);
	}

}
