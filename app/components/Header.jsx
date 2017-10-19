import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return(
      <div>
        <Link to="/home">
          <div id="home">Home</div>
        </Link>
        <Link to="/students">
          <div id="studs">Studs.</div>
        </Link>
      </div>
    )
  }
}
