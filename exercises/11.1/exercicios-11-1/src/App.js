import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>
        {('Hello World')}
        </h2>
        <ul>
         { tarefas.map(tarefa => Task(tarefa)) }
        </ul>
      </div>
    );
  }
}

export default App;