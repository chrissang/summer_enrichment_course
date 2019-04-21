import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { RegisterForm } from 'register-form';

class SatMathPage extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		let title = null;
		let copy = null;

		if (this.props.courseData.satMathSection) {
			title = this.props.courseData.satMathSection.title;
			copy = this.props.courseData.satMathSection.copy;
		}

		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="jumbotron">
						<h1 className="display-4">{title}</h1>
						<p className="lead">{copy}</p>
						<hr className="my-4"/>
						<p>Please contact to register</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};
 
export default connect(mapStateToProps)(SatMathPage);