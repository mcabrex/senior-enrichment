import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCampus from './AddCampus'
import DeleteCampus from './DeleteCampus'

export default class Campuses extends Component {
  constructor(){
    super();
    this.state = {
      campuses: []
    }
  }

  componentDidMount(){
    axios.get('/api/campus')
      .then(res=>res.data)
      .then(campusList=>this.setState({campuses:campusList}))
      .catch(err=>{
        console.log('ERROR',err)
      })
  }

  render(){
    console.log('THE STATE',this.state)
    const campuses = this.state.campuses
    return(
      <div className="main-campus">
        {campuses.map(campus=>{
          return(
            <div className={`campus${campus.id%4+1}`} key={campus.id}>
              <div className={`circle${campus.id%4+1}`}>
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
              <Link to={`/campus/${campus.id}/updateCampus`}>
                <button>-</button>
              </Link>
              <DeleteCampus delete={campus.id}/>
              </div>
            </div>
          )
        })}
        <Link to="/campus/addCampus">
          <button>+</button>
        </Link>
      </div>
    )
  }
}
