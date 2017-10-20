import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor(){
    super();
    this.state = {
      campuses: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    axios.get('/api/campus')
      .then(res=>res.data)
      .then(campusList=>{
        this.setState({campuses:campusList})
      })
      .catch(err=>{
        console.log("ERROR",err)
      })
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
    const state = this.state
    const form = {
      name: state.name,
      email: state.email,
      CampusId: state.campus
    }
    axios.post('/api/students',form)
      .then(res=>res.data)
      .then(res=>{
        console.log('response',res)
    })
  }

  render(){
    const campuses = this.state.campuses
    console.log(this.state)
    return(
      <div>
      <div>Add Person</div>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="name" name="name"></input>
        </div>
        <div>
          <input type="text" placeholder="email" name="email"></input>
        </div>
        <select name="campus">
          <option>Select Campus</option>
          {campuses.map(campus=>{
            return(
              <option value={campus.id} key={campus.id}>{campus.name}</option>
            )
          })}
        </select>
        <button>Submit</button>
      </form>
      </div>
    )
  }
}
