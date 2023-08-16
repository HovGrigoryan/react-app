import React from 'react';
import getCourseDuration from "../../../../helpers/getCourseDuration";
import {mockedAuthorsList} from "../../../../constants";

const CourseCard = ({ course }) => {
    const { title, duration, creationDate, description, authors } = course;

    const authorsNames = authors.map(authorId => {
        const author = mockedAuthorsList.find(a => a.id === authorId);
        return author ? author.name : 'Unknown Author';
    }).join(', ');

    return (
        <div className="course-card">
            <h3 className="course-title">{title}</h3>
            <p className="course-duration">{getCourseDuration(duration)}</p>
            <p className="course-creation-date">{creationDate}</p>
            <p className="course-description">{description}</p>
            <p className="course-authors">{authorsNames}</p>
            <button className="show-course-button">Show Course</button>
        </div>
    );
};

export default CourseCard;
