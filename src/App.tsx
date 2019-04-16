import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HelloWithMarks} from './components';


class App extends Component <any> {

 // maxMarks = 5;

  render() {
    console.log('Rendering App');
    return (
      <div className="App">
        <header className="App-header">
          <span>My React App</span>
        </header>
        <div>
          <HelloWithMarks to="World" from="My React App" maxMarks={5} /> 
          <HelloWithMarks to="Steve" from="Richard" maxMarks={2} /> 
        </div>
      </div>
    );
  }
}

export default App;
