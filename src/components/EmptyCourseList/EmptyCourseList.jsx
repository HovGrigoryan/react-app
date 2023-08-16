import React from 'react';
import Button from "../../common/Button/Button";

const EmptyCourseList = () => {
    return (
        <div className="empty-course-list">
            <h3 className="empty-title">Course List is Empty</h3>
            <p className="empty-subtitle">Please use "Add New Course" button to add your first course</p>
            <Button buttonText="Add New Course" /> {/* Without functionality for now */}
        </div>
    );
};

export default EmptyCourseList;
