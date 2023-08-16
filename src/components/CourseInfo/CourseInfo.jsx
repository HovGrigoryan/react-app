import React from 'react';

const CourseInfo = ({ course }) => {
    const { id, title, description, duration, authors, creationDate } = course;

    return (
        <div className="course-info">
            <h3>Course Information</h3>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Duration: {duration} minutes</p>
            <p>Authors: {authors.join(', ')}</p>
            <p>Creation Date: {creationDate}</p>
            <button className="back-to-courses-button">Back to Courses</button>
        </div>
    );
};

export default CourseInfo;
