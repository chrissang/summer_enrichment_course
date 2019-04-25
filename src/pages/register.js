import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/register-form';

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