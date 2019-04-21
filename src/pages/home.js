import React, { Component } from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		let cardList = null;
    if (Object.keys(this.props.courseData).length > 0) {
      cardList = (
        <div className="row">
          {
            this.props.courseData.courses.map((course, index) => {
              return <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <Card cardData={course}></Card>
                </div>
            })
          }
        </div>
			);
		}
		return (
			<div>
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