import React, { Component } from 'react';
import './App.css';
import Checkbox from "./components/Checkbox/Checkbox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shopping List</h1>

        <div className="checkboxes">
          <Checkbox label="Bread" />
          <Checkbox isChecked label="Milk" />
          <Checkbox isChecked isDisabled label="Eggs" />
          <Checkbox label="Potatoes" className="more-margin" />
        </div>
      </div>
    );
  }
}

export default App;
