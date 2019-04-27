import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		const cardBody = {
			'backgroundColor': '#f05454',
			'color': '#fff'
		};
		let bulletList = null;
    if (this.props.cardData.bulletPoints.length > 0) {
      bulletList = (
        <ul>
          {
            this.props.cardData.bulletPoints.map((bullet, index) => {
              return <li key={index}>{bullet}</li>
            })
          }
        </ul>
      );
    }
		return (
			<div className="card mt-3 ml-2 mr-2 d-flex overrideFlex">
				<div className="card-body cardBgColor d-flex flex-column justify-content-between">
					<h5 className="card-title">{this.props.cardData.title}</h5>
					<span>{this.props.cardData.date} </span>
					<span>{this.props.cardData.time}</span>
					{bulletList}
					<p><b>{this.props.cardData.price}</b></p>
					<Link to="/register" className="btn btn-secondary">Contact to register </Link>
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

export default connect(mapStateToProps)(Card);