import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Campuses extends Component {
  render(){
    return(
      <div className="main-campus">

        <Link to="/:campusTest">
          <div>Luna</div>
        </Link>

        <Link to="/:campusTest">
          <div>Terra</div>
        </Link>

        <Link to="/:campusTest">
          <div>Mars</div>
        </Link>

        <Link to="/:campusTest">
          <div>Titan</div>
        </Link>

      </div>
    )
  }
}
