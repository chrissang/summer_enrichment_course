import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleNavState: false
		};
		// this.toggleNavState = false;
	}
	toggleNav = () => {
		const toggle = !this.state.toggleNavState;
		this.setState({toggleNavState: toggle});
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
								src="images/icon.png"
								alt="logo"
								style={iconStyle}/>
							{this.props.courseData.title}
						</a>
						<button
							onClick={this.toggleNav}
							className="navbar-toggler collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#navbarColor01"
							aria-controls="navbarColor01"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							id="navbarColor01"
							className={"navbar-collapse collapse" + (this.state.toggleNavState ? 'show' : '')}>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">Intensive SAT Math Course</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Intensive SAT Math Course</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Algebra and Foundations for 6th Graders</a>
								</li>
							</ul>
						</div>
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