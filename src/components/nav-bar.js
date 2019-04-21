import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const iconStyle = {
			'width':'25px',
			'height': '25px',
			'marginRight': '.5rem'
		}
		return (
			<div className="row">
				<div className="col-sm-12">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<a className="navbar-brand" href="#">
							<img
								src="http://localhost:3000/images/icon.png"
								alt="logo"
								style={iconStyle}/>
							{this.props.courseData.title}
						</a>
					</nav>
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

export default connect(mapStateToProps)(NavBar);