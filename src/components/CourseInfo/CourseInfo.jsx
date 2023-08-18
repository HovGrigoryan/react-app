import React from 'react';
import getCourseDuration from '../../helpers/getCourseDuration';

const CourseInfo = ({ course, onBackToCourses }) => {
    const {
        id,
        title,
        description,
        duration,
        authors,
        creationDate,
    } = course;

    const authorsList = authors.map(author => author.name).join(', ');

    return (
        <div className="course-info">
            <h2>Course Information</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Duration:</strong> {getCourseDuration(duration)}</p>
            <p><strong>Authors:</strong> {authorsList}</p>
            <p><strong>Creation Date:</strong> {creationDate}</p>
            <button onClick={onBackToCourses}>Back to Courses</button>
        </div>
    );
};

export default CourseInfo;
