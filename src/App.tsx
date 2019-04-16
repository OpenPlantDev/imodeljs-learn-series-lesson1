import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Button, Toolbar} from './components';
import { IToolbarButtonProps } from './components/Toolbar/Toolbar';


interface IState  {
  numMarks: number;
}

enum ToolbarButtonIds {
  decrement = 'decrement',
  increment = 'increment'
  }

  enum ButtonStatus {
    enabled,
    disabled
  }

class App extends Component <any, IState> {

  state: IState = {numMarks: 0};
  toolbar: IToolbarButtonProps[]; 
  maxMarks = 5;

  constructor (props: any) {
    super(props);
    this.toolbar = [
      {id: ToolbarButtonIds.decrement, label: '-', onClick: this.onDecrement, disabled: true},
      {id: ToolbarButtonIds.increment, label: '+', onClick: this.onIncrement, disabled: false},
    ];
  }

  setButtonStatus = (buttonId: string, status: ButtonStatus) => {
    const button = this.toolbar.find((tbutton) => tbutton.id === buttonId);
    if(button) {
      button.disabled = status === ButtonStatus.disabled;
    }

  }

  onIncrement = () => {
    const numMarks = ++this.state.numMarks;
    this.setButtonStatus(ToolbarButtonIds.decrement, numMarks > 0 ? ButtonStatus.enabled: ButtonStatus.disabled);
    this.setButtonStatus(ToolbarButtonIds.increment, numMarks < this.maxMarks ? ButtonStatus.enabled: ButtonStatus.disabled);
    this.setState( {numMarks: numMarks} );
  }

  onDecrement = () => {
    const numMarks = Math.max(--this.state.numMarks, 0);
    this.setButtonStatus(ToolbarButtonIds.decrement, numMarks > 0 ? ButtonStatus.enabled: ButtonStatus.disabled);
    this.setButtonStatus(ToolbarButtonIds.increment, numMarks < this.maxMarks ? ButtonStatus.enabled: ButtonStatus.disabled);
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
          <Toolbar buttons={this.toolbar} />
        </div>
      </div>
    );
  }
}

export default App;
