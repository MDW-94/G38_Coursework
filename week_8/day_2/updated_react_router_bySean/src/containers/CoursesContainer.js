import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseDetails from '../components/courses/CourseDetails';
import CourseNavBar from '../components/courses/CourseNavBar';
import CourseList from '../components/courses/CourseList';

const CoursesContainer = () => {

    // Container holds its own state
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [courses, setCourses] = useState([
        {id: 1, courseName: "Python", instructor: "Sean", cost: 4000},
        {id: 2, courseName: "Javascript", instructor: "Randolph",cost: 40},
        {id: 3, courseName: "Java", instructor: "Steve",cost: 20}
    ])

    
    // you can only have one router but you can have many routes
    // these routes will now be prepended by: /courses  e.g. /courses/about 
    return ( 
        <>
        <CourseNavBar />
        <Routes>  
            <Route path="/" element={<CourseList courses={courses} setSelectedCourse={setSelectedCourse}/>}/>
            <Route path="/about" element={<h1>Courses about page</h1>}/>
            <Route path="/:id" element={<CourseDetails courses={courses} selectedCourse={selectedCourse} />}/>
        </Routes>
        </>
     );
}
 
export default CoursesContainer;