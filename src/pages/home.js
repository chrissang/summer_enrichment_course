import React, { Component } from 'react';
import About from '../components/about';
import Card from '../components/card';
import { connect } from 'react-redux';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		let cardList = null;
		let phoneNumber = null;
		let location = null;
		
		if (Object.keys(this.props.courseData).length > 0) {
      cardList = (
        <div className="row mb-5">
          <div className="col-sm-12">
            <div className="flex-d card-group flex-sm-column flex-md-row">
              {
                this.props.courseData.courses.map((course, index) => {
                  return <Card key={index} cardData={course}></Card>
                })
              }
            </div>
          </div>
        </div>
			);
		}
		if (this.props.courseData) {
			phoneNumber = (
				<p>Call
					{' '}
					<a className="link" href={"tel:" + this.props.courseData.phoneNumberLink}>
						<u>{this.props.courseData.phoneNumber}</u>
					</a>
					{' '}
					to speak to the instructor
				</p>
			);
		}
		if (this.props.courseData.location) {
			location = (
				<p>
					{this.props.courseData.location.copy}
					{' '}
					<a className="link" href={this.props.courseData.location.link} target="_blank">
						<u>{this.props.courseData.location.facility}</u>
					</a>
					{' '}
					{this.props.courseData.location.address}
				</p>
			);
		}
		return (
			<div>
        <About />
				<div className="row">
					<div className="col-sm-12 mt-3">
						{phoneNumber}
						{location}
					</div>
				</div>
				{cardList}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};

export default connect(mapStateToProps)(HomePage);