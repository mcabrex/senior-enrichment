import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateCampus extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const form = {
      name: this.state.name
    }
    const id = this.props.match.params.campusId
    axios.put(`/api/campus/${id}`,form)
      .then(res=>res.data)
      .then(res=>{
        console.log(res)
      })
  }

  render(){
    console.log(this.state)
    return(
      <div className="title">
        Update Campus
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="name" name="name"></input>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    )
  }
}
