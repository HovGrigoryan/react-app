import React from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import {mockedCoursesList} from "../../constants";

const Courses = () => {
    return (
        <div className="courses-list">
            {mockedCoursesList.length === 0 ? (
                <EmptyCourseList />
            ) : (
                mockedCoursesList.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))
            )}
        </div>
    );
};

export default Courses;
