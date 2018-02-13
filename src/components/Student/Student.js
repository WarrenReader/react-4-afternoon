import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {
        first_name: '',
        last_name: '',
        grade: '',
        email: '',
        class: ''
      }
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {this.setState({studentInfo: res.data}); console.log(res.data)})
  }

  render() {
    let {first_name, last_name, email, grade} = this.state.studentInfo;
    let classTitle = this.state.studentInfo.class;

    return (
      <div>
        <div className='subnav'>
          <Link to={`/classlist/${classTitle}`} className='subnav_links'><h3>Back</h3></Link>
        </div>
        <div className="box">
          <h1>{`${first_name} ${last_name}`}</h1>
          <h3>{`Grade: ${grade}`}</h3>
          <h3>{`Email: ${email}`}</h3>
        </div>
      </div>
    )
  }
}