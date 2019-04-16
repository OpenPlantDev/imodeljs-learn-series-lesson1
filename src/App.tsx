import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Button} from './components';

interface IState  {
  numMarks: number;
}

class App extends Component <{}, IState> {

  state: IState = {numMarks: 0};

  onIncrement = () => {
    const numMarks = ++this.state.numMarks;
    this.setState( {numMarks: numMarks} );
  }

  onDecrement = () => {
    const numMarks = Math.max(--this.state.numMarks, 0);
    this.setState( {numMarks: numMarks} );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>My React App</span>
        </header>
        <div>
          <Hello to="World" from="My React App" numMarks={this.state.numMarks} />  
          <Button label="+" onClick={this.onIncrement} />
          <Button label="-" onClick={this.onDecrement} />
        </div>
      </div>
    );
  }
}

export default App;
