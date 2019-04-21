import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import NavBar from './components/nav-bar';
import HomePage from './pages/home';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <NavBar/>
        <Route path="/" exact component={HomePage}/>
      </div>
    );
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/summer_enrichment_courses.json`)
      .then(res => {
        const courseData = res.data;
        this.props.getDataCourseData(courseData);
      })
  }
}

const mapStateToProps = state => {
  return {
    courseData: state.summerCourseData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataCourseData: (courseData) => dispatch({type: 'GET_COURSE_DATA', value: courseData})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
