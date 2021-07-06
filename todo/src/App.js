import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {Jumbotron} from 'reactstrap';







function App() {

  return (
    <Jumbotron fluid className="App">
      <h2>GET YOUR FUCKING SHIT DONE!</h2>
      <TodoList/>
    </Jumbotron>
  );
}

export default App;
