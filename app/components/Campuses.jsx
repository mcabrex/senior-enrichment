import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Campuses extends Component {
  render(){
    return(
      <div className="main-campus">
        <div>Luna</div>
        <div>Terra</div>
        <div>Mars</div>
        <div>Titan</div>
      </div>
    )
  }
}
