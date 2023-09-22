import React, { useEffect, useState } from 'react'


const CourseDetails = ({selectedCourse}) => {

    console.log(selectedCourse)

    return ( 
        <div>
            <h4>Course Name: {selectedCourse.courseName}</h4>
            <p>This course will make you cry {selectedCourse.cost} tears</p>
            <h5>Instructed by {selectedCourse.instructor}</h5>

        </div>
     );
}
 
export default CourseDetails;