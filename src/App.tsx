import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Button, Toolbar} from './components';
import { IToolbarButton } from './components/Toolbar/IToolbarButton';

interface IState  {
  numMarks: number;
}

class App extends Component <any, IState> {

  state: IState = {numMarks: 0};
  toolbar: IToolbarButton[]; 

  constructor (props: any) {
    super(props);
    this.toolbar = [
      {id: 0, label: '+', onClick: this.onIncrement},
      {id: 1, label: '-', onClick: this.onDecrement}
    ];
  }

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

          <Toolbar buttons={this.toolbar} 
          />

          {/* <Button label="+" onClick={this.onIncrement} />
          <Button label="-" onClick={this.onDecrement} /> */}
        </div>
      </div>
    );
  }
}

export default App;
