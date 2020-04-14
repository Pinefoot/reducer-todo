import React from 'react';
import '../App.css';

const Todos =(props)=>{
    const toggleStyle = props.toDoTask.completed ? 'completed' : 'nomral'
    // console.log(toggleStyle)
     return(
     <div >
         <p className={toggleStyle} onClick={() => props.toggleChange(props.toDoTask)}>
             {props.toDoTask.item}</p>

     </div>
   
     )
}

export default Todos;