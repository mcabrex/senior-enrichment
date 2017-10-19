import React, { Component } from 'react';
import Header from './Header'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Students from './Students'
import Campuses from './Campuses'
import Student from './Student'
import Campus from './Campus'
import AddStudent from './AddStudent'

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
            <Route exact path="/" component={Campuses}/>
            <Route exact path="/home" component={Campuses}/>
            <Route exact path="/students" component={Students}/>
            <Route exact path="/students/studentTest" component={Student}/>
            <Route exact path="/:campusTest" component={Campus}/>
            <Route exact path="/students/studentTest/addStudent" component={AddStudent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
