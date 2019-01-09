import React, { Component } from 'react';
import './App.css';
import Projects from './Component/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App">React Projects List</h1>
        <Projects />
      </div>
    );
  }
}

export default App;
