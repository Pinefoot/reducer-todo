import React, {useReducer, useState} from 'react';
import {reducer, initialState} from '../reducers/Reducer';



function TodoForm (props) {
const [state, dispatch] = useReducer(reducer, initialState)

const [taskInput, setTaskInput] = useState('')


const submitTask = event =>{
    event.preventDefault();
    dispatch({type:'ADD_TASK', payload: taskInput})
}//submitsnewTask

const removeComplete=event=>{
    event.preventDefault();
    dispatch({type: 'CLEAR_COMPLETED'})
  }//removesItem


const handleChange = event => {
    event.preventDefault()
    setTaskInput (event.target.value)

}//handlesSubmitting

    return(
        <form>
            <input 
            type = 'text'
            name='name' 
            placeholder='Add a new Task'
            value ={taskInput}
            onChange = {handleChange}/>
            <button onClick={event=>{submitTask(event)}}>Add Task!</button>
            <button onClick={event=>{removeComplete(event)}}>Remove Completed Task!</button>

        </form>    
    )
}
export default TodoForm;