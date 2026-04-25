import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Available Courses</h2>
        <div className="row">
          {this.props.courses.map(course => (
            <div className="col-md-4" key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseList;