import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			name: '',
			phoneNumber: '',
			timeToReachYou: '',
      isPhoneNumber: true,
      routeToSuccess: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	validatePhoneNumber = () => {
		const number = this.state.phoneNumber;
		const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (number.match(phoneNumberRegex))
			this.setState({isPhoneNumber: true});
		else
			this.setState({isPhoneNumber: false});
	}
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
		const id = target.id;
		
		this.setState({
			[id]: value
		});
  }
  handleSubmit = (event) => {
		event.preventDefault();
		this.validatePhoneNumber();
		if (this.state.phoneNumber.length > 0 && this.state.isPhoneNumber) {
      const emailParams = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        timeToReachYou: this.state.timeToReachYou
      }
			emailjs.send('kunalnshah15', 'template_4sBnZzEY', emailParams, 'user_8c1R8Hn7KJ93CT6jDBzZq')
				.then((response) => {
          this.setState({routeToSuccess: true});
				}, (err) => {
					console.warn('FAILED...', err);
      	});
		} else {
			this.setState({isPhoneNumber: false});
		}
  }
  render() {
    if (this.state.routeToSuccess) return <Redirect to='/register/success' />
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
						type="text"
						required
						className={"form-control " + (this.state.isPhoneNumber ? '' : 'is-invalid')}
						onBlur={this.validatePhoneNumber}
            id="phoneNumber"
            name="phoneNumber"
						placeholder="111-111-1111"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}/>
					<div className="invalid-feedback">Please provide a valid phone number</div>
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
        <button type="submit" className="btn btn-secondary">Submit</button>
        <p className="mt-3">You may also call or text the instructor at
          {' '}
          <a className="link" href={"tel:" + this.props.courseData.phoneNumberLink}>
            <u>{this.props.courseData.phoneNumber}</u>
          </a>
        </p>
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