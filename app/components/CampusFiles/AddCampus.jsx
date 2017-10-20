import React, { Component } from 'react';
import axios from 'axios';

export default class AddCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    }
    axios.post('/api/campus',form)
      .then(res=>res.data)
      .then(res=>{
        console.log('response',this.props.route)
        this.props.route.history.push('/home')
    })
  }

  render(){
    return(
      <div>
      <div>Add Campus</div>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Campus Name" name="name"></input>
        </div>
        <button>Submit</button>
      </form>
      </div>
    )
  }
}
