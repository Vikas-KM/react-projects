import React, { Component } from "react";
import "./App.css";
import ProjectList from "./ProjectList";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App">React Projects List</h1>
        <ProjectList />
      </div>
    );
  }
}

export default App;
