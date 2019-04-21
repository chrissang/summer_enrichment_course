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
		return (
			<div>
        <About />
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