import React from 'react'; 
import Header from './Header';
import Content from './Content'
import Total from './Total'



const Course = ({course}) => {
    console.log("Props in Course", course)
    return (
    <div>
       {course.map(c =>
       <div key={c.id}> 
        <Header header = {c.name} />
        <Content parts = {c.parts} />
        <Total parts = {c.parts} />
        </div>
        )}
        </div>
    )
}

export default Course