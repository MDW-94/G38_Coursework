import React from "react";
import { Link } from "react-router-dom";

const CourseNavBar = () => {

    return ( 
        <>
        <hr/>
        <h3>Courses Nav Bar</h3>
        <ul>
            <li>
                <Link to="/courses" > List of all Courses</Link>
            </li>
            <li>
                <Link to="/courses/about" >About our Courses</Link>
            </li>
        </ul>
        </>
     );
}

export default CourseNavBar;