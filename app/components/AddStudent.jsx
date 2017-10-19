import React, { Component } from 'react';

export default class AddStudent extends Component {
  render(){
    return(
      <div>
      <div>Add Person</div>
      <input type="text"></input>
      <select>
        <option>Select Campus</option>
        <option>Luna</option>
        <option>Terra</option>
        <option>Mars</option>
        <option>Titan</option>
      </select>
      <button>Submit</button>

      </div>
    )
  }
}
