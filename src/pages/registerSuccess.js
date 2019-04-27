import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterSuccessPage extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div className="row">
				<div className="col-sm-12 mt-4">
					<div className="card">
  					<h5 className="card-header">Success</h5>
  					<div className="card-body">
							<p>{this.props.courseData.registerSuccessCopy}</p>
  					</div>
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
 
export default connect(mapStateToProps)(RegisterSuccessPage);