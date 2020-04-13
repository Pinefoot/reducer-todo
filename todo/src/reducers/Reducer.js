import React, {useState, useReducer} from 'react';



const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

  const reducer = (state, action) => {
      switch (action.type){
          case 'addItem':{
              return{ 
                  ...state,
                  item: '',
                  id: `new Date()`
                }
          }
          default: 
          return state;
      }
     

  }

  export {initialState, reducer};