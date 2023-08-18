import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import './App.css';
const App = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleShowCourseInfo = (course) => {
        setSelectedCourse(course);
    };


    return (
        <div className="app">
            <Header />
            {selectedCourse ? (
                <CourseInfo course={selectedCourse} />
            ) : (
                <Courses
                    courses={mockedCoursesList}
                    authors={mockedAuthorsList}
                    onShowCourseInfo={handleShowCourseInfo}
                />
            )}
        </div>
    );
};

export default App;
