import React from 'react'

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export function addTask (task){
    return {
        type: ADD_TASK, payload: task
    }
    
}

export function removeTask(task){
    return{
        type: REMOVE_TASK, payload: task
    }
}

export function toggleTask(task){
    return{
        type: TOGGLE_TASK, payload: task
    }
}

