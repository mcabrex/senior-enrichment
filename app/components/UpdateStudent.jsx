import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateStudent extends Component {
  constructor(props){
    super(props)
    console.log('bamboozle',props)
    this.state = {
      campuses: [],
      studentToUpdate: props.match.params.studentId,
      name: '',
      email: '',
      campus: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    axios.get('/api/campus')
      .then(res=>res.data)
      .then(campusList=>{
        this.setState({campuses:campusList})
      })
      .catch(err=>{
        console.log("ERROR",err)
      })
  }

  handleChange(event){
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const form = {
      name: this.state.name || '',
      email: this.state.email || '',
      CampusId: this.state.campus
    }
    const id = this.props.match.params.studentId;
    axios.put(`/api/students/${id}`,form)
      .then(res=>res.data)
      .then(res=>{
        console.log(res)
      })
  }


  render(){
    const student = this.state.studentToUpdate
    const campuses = this.state.campuses
    console.log('bizooper', this.state)
    return(
      <div>
        Update Student
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="name" name="name"></input>
          </div>
          <div>
            <input type="text" placeholder="email" name="email"></input>
          </div>
          <select name="campus">
            <option>Select Campus</option>
            {campuses.map(campus=>{
              return(
                <option value={campus.id} key={campus.id}>{campus.name}</option>
              )
            })}
          </select>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
