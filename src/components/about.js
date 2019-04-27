import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let title = null;
    let sections = null;
    
    if (this.props.courseData.about) {
      title = this.props.courseData.about.title;
      sections = (
        <div>
          {
            this.props.courseData.about.sections.map((section, index) => {
              return <p className="mb-0" key={index}>{section}</p>
            })
          }
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-sm-12 mt-3">
          <h1>{title}</h1>
          {sections}
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

export default connect(mapStateToProps)(About);

// 235 74 82