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
			'marginLeft': '.5rem',
			'marginRight': '.5rem'
		}
		return (
			<nav className="navbar navbar-dark bg-dark p-1">
				<a className="navbar-brand" href="#">
					<img
						src="/images/icon.png"
						alt="logo"
						style={iconStyle}/>
					{this.props.courseData.title}
				</a>
			</nav>
		);
	}
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};

export default connect(mapStateToProps)(NavBar);