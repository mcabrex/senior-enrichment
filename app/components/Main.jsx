import React, { Component } from 'react';
import Header from './Header'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Students from './Students'
import Campuses from './Campuses'
import Student from './Student'
import Campus from './Campus'
import AddStudent from './AddStudent'
import AddCampus from './AddCampus'
import UpdateStudent from './UpdateStudent'
import UpdateCampus from './UpdateCampus'

export default class Main extends Component {
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
            <Route exact path="/students/addStudent" component={AddStudent}></Route>
            <Route exact path="/students/:studentId/updateStudent" component={UpdateStudent} />
            <Route exact path="/students/:studentId" component={Student}/>
            <Route exact path="/campus/addCampus" component={AddCampus}></Route>
            <Route exact path="/campus/:campusId/updateCampus" component={UpdateCampus} />
            <Route exact path="/campus/:campusId" component={Campus}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
