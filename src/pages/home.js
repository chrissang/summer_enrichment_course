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
        <div className="container mb-5">
          <div class="row justify-content-md-center">
            <div className="col-sm-12">
              <div className="card-group">
                {
                  this.props.courseData.courses.map((course, index) => {
                    return <div key={index}>
                        <Card cardData={course}></Card>
                      </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
			);
		}
		if (this.props.courseData) {
			phoneNumber = (<p>Call {this.props.courseData.phoneNumber} to speak to the instructor</p>);
		}
		if (this.props.courseData.location) {
			location = (
				<p>
					{this.props.courseData.location.copy}
					<a href={this.props.courseData.location.link}> {this.props.courseData.location.facility} </a>
					{this.props.courseData.location.address}
				</p>
			);
		}
		return (
			<div>
        <About />
				<div className="row">
					<div className="col-sm-12 px-5 mt-3">
						<p>{phoneNumber}</p>
						<p>{location}</p>
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