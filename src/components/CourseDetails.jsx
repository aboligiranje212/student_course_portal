import React, { Component } from "react";

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrolled: false
    };
  }

  handleEnroll = () => {
    this.setState({ enrolled: true });
  };

  render() {
    const courseId = parseInt(this.props.match.params.id);
    const course = this.props.courses.find(c => c.id === courseId);

    if (!course) {
      return <h2 className="text-center mt-5">Course Not Found</h2>;
    }

    return (
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2>{course.name}</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Price:</strong> ₹{course.price}</p>

          <button className="btn btn-success" onClick={this.handleEnroll}>
            Enroll
          </button>

          {this.state.enrolled && (
            <div className="alert alert-success mt-3">
              Enrollment Successful!
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CourseDetails;