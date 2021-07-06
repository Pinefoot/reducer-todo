import React, {useReducer, useState} from 'react';
import {reducer, initialState} from '../reducers/Reducer';
import {addTask, removeTask, toggleTask} from './actions/Actions';
import Todos from '../components/Todos';
import {Button, Form, Card, Input} from 'reactstrap';




function TodoList (props) {
const [state, dispatch] = useReducer(reducer, initialState)

const [newTaskInput, setNewTaskInput] = useState({
    item: '',
    completed: false,
    id: state.todoList.length
})


const addNewTask = event =>{
    event.preventDefault();
    dispatch(addTask(newTaskInput))
    //console.log('this is the payload for addTask',newTaskInput);
    console.log('This is the complete event on addTask', event)

    setNewTaskInput({
        item: '',
        completed: false,
        id: state.todoList.length
    })
}//submitsnewTask

const removeComplete=(event,task)=>{
    event.preventDefault();
    dispatch(removeTask(task))
  }//removesItem


const handleChange = event => {
    //event.preventDefault()
    setNewTaskInput ({
        [event.target.name]: event.target.value,
        completed: false,
        id: state.todoList.length
    })

  


}//handlesSubmitting
const toggleChange = task =>{
    
    dispatch(toggleTask(task))
    
}  



    return(
        
        <Card >
        
        
        <Form className="formControl">
            <Input className="todoInput"
            type = 'text'
            name='item' 
            placeholder='Add a new Task'
            value ={newTaskInput.item}
            onChange = {handleChange}/>
            <Button  outline color="success" variant="contained" color="primary" onClick={event=>{addNewTask(event)}}>Add Task!</Button>
            <Button outline color="warning" onClick={event=>{removeComplete(event)}}>Remove Completed Task!</Button>
            

        </Form>  
        {state.todoList.map(t =>{
            return <Todos
            key={t.id}
            toggleChange={toggleChange}
            toDoList={state.toDoList}
            toDoTask={t}
            
                />
        })} 
        </Card> 
    )
}
export default TodoList;
