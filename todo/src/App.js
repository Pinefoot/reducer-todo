import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';






function App() {

  return (
    <div className="App">
      <TodoForm />
      <TodoList/>
    </div>
  );
}

export default App;
