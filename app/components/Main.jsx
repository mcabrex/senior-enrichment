import React, { Component } from 'react';
import Header from './Header'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Students from './Students'
import Campuses from './Campuses'
import StatefulStudents from './StatefulStudents'

export default class Main extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Router>
        <div>
          <h1>
            <Header />
          </h1>
          <Switch>
            <Route exact path="/home" component={Campuses}/>
            <Route exact path="/students" component={Students}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
