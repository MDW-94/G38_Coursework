import React from 'react'
import { Link } from 'react-router-dom';

const CourseList = ({ courses, setSelectedCourse }) => {

    const courseList = courses.map((course, index) => {
        return (
            <li key={index}>
                <p>{course.courseName} instructed by {course.instructor}</p> 
                <Link to={"/courses/" + course.courseName} onClick={() => { setSelectedCourse(course) }}>Click for more detail</Link>
            </li>
        )
    })

    return (
        <ul>
            {courseList}
        </ul>
    );
}

export default CourseList;