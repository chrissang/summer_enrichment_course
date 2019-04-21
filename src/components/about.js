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
              return <p className="mb-0" key={index}><small>{section}</small></p>
            })
          }
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-sm-12 px-5 mt-3">
          <h3>{title}</h3>
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