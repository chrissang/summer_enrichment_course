import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as emailjs from 'emailjs-com';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			name: '',
			phoneNumber: '',
			email: '',
			timeToReachYou: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    emailjs.send('gmail', 'template_4sBnZzEY', this.state, 'user_8c1R8Hn7KJ93CT6jDBzZq')
      .then(function(response) {
      }, function(err) {
        console.warn('FAILED...', err);
      });
  }
  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="111-111-1111"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@gmail.com"
            value={this.state.email}
            onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label>Best time to reach you</label>
          <input
            type="text"
            className="form-control"
            id="timeToReachYou"
            placeholder="2PM"
            value={this.state.timeToReachYou}
            onChange={this.handleInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p className="mt-3">You may also call or text the instructor at {this.props.courseData.phoneNumber}</p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};
 
export default connect(mapStateToProps)(RegisterForm);