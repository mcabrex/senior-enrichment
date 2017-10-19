// import React, { Component } from 'react';
// import axios from 'axios';
// import Students from './Students'
//
// export default class StatefulStudents extends Component {
//   constructor(){
//     super()
//     this.state={
//       students = []
//     }
//   }
//
//   componentDidMount(){
//     axios.get('/api/students')
//     .then(res=>res.data)
//     .then(students=>{
//       this.setState({students})
//     })
//   }
//
//   render(){
//     const students = this.state.students {
//       return(
//         <Students students={students}/>
//       )
//     }
//   }
// }
