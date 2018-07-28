import React, { Component } from 'react';
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="header">
          <Header />
        </header>

        <div>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
