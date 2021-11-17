import React from 'react'; 
import Header from './Header';
import Content from './Content'


const Course = ({course}) =>{
   console.log({course})
    return( 
   <div>
        <Header header = {course.name} />
        <Content parts = {course.parts} />
     
    </div> 
    )
}

export default Course