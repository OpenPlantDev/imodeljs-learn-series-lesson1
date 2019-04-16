import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Button} from './components';


interface IState  {
  numMarks: number;
}

class App extends Component <any, IState> {

  state: IState = {numMarks: 0};
  maxMarks = 5;

  onIncrement = () => {
    const numMarks = ++this.state.numMarks;
    this.setState( {numMarks: numMarks} );
  }

  onDecrement = () => {
    const numMarks = Math.max(--this.state.numMarks, 0);
    this.setState( {numMarks: numMarks} );
  }

  render() {
    console.log('Rendering App');
    return (
      <div className="App">
        <header className="App-header">
          <span>My React App</span>
        </header>
        <div>
          <Hello to="World" from="My React App" numMarks={this.state.numMarks} /> 
          <Button label='-' onClick={this.onDecrement} disabled={this.state.numMarks == 0} />
          <Button label='+' onClick={this.onIncrement} disabled={this.state.numMarks == this.maxMarks} />
        </div>
      </div>
    );
  }
}

export default App;
