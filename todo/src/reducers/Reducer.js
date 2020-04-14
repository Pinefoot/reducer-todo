import React, { useState, useReducer } from 'react';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from '../components/actions/Actions';



const initialState = {
  todoList: [{
    item: 'Learn about reducers',
    completed: false,
    id: 0


  },
  {
    item: 'Study more',
    completed: false,
    id: 1
  }



  ]
}

const reducer = (state, action) => {
  console.log(state, 'this is state');
  switch (action.type) {

    case ADD_TASK:
      return {
        todoList: [
          ...state.todoList,
          action.payload

        ]
      }
    case TOGGLE_TASK:
      console.log('toggle', state.todoList[action.payload.id].completed)

      // state.todoList[action.payload.id].completed = !state.todoList[action.payload.id].completed 

      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            }

          }
          return (todo)

        })


      }


    default:
      return state;

  }


}

export { initialState, reducer };