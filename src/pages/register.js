import React, { Component } from 'react';
import RegisterForm from '../components/register-form';
import { connect } from 'react-redux';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="jumbotron">
						<h1>Register</h1>
            <RegisterForm />
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		window.scrollTo(0,0);
	}
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};
 
export default connect(mapStateToProps)(RegisterPage);