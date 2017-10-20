import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return(
      <div>
        <div id="home">
          <Link to="/home">
            Home
          </Link>
        </div>
        <div id="studs">
          <Link to="/students">
            Studs.
          </Link>
        </div>
      </div>
    )
  }
}
