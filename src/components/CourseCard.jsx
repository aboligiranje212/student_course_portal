import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { course } = this.props;

    return (
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">Duration: {course.duration}</p>
          <Link to={`/course/${course.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    );
  }
}

export default CourseCard;