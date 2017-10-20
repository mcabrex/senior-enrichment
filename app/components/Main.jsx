import React, { Component } from 'react';
import Header from './Header'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Students from './StudentFiles/Students'
import UpdateStudent from './StudentFiles/UpdateStudent'
import AddStudent from './StudentFiles/AddStudent'
import Student from './StudentFiles/Student'
import Campuses from './CampusFiles/Campuses'
import Campus from './CampusFiles/Campus'
import AddCampus from './CampusFiles/AddCampus'
import UpdateCampus from './CampusFiles/UpdateCampus'

export default class Main extends Component {
  render(){
    return(
      <Router>
        <div className="daddy">
          <div className="header">
            <h1>
              <Header />
            </h1>
          </div>
          <div className="main">
          <Switch>
            <Route exact path="/" component={Campuses}/>
            <Route exact path="/home" component={Campuses}/>
            <Route exact path="/students" component={Students}/>
            <Route exact path="/students/addStudent" render={(routeprops)=><AddStudent route={routeprops}/>}></Route>
            <Route exact path="/students/:studentId/updateStudent" component={UpdateStudent} />
            <Route exact path="/students/:studentId" component={Student}/>
            <Route exact path="/campus/addCampus" render={(routeprops)=><AddCampus route={routeprops}/>}></Route>
            <Route exact path="/campus/:campusId/updateCampus" component={UpdateCampus} />
            <Route exact path="/campus/:campusId" component={Campus}/>
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
