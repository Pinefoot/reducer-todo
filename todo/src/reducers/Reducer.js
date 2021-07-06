import React, { useState, useReducer } from "react";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
} from "../components/actions/Actions";

const initialState = {
  todoList: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 0,
    },
    {
      item: "Study more",
      completed: false,
      id: 1,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        todoList: [...state.todoList, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
      case REMOVE_TASK:
        return{
          ...state,
          todoList: state.todoList.filter(todo =>{
            return todo.completed !== true;
          })
        }
    default:
      return state;
  }
};

export { initialState, reducer };
