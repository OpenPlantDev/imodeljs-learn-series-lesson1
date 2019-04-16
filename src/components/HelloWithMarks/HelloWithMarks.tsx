import React, { Component } from 'react';
import {Hello} from '../Hello/Hello';
import {Button} from '../Button/Button';

interface IProps {
  maxMarks: number;
  to: string;
  from?: string;
}

interface IState  {
  numMarks: number;
}

export class HelloWithMarks extends Component <IProps, IState> {

  state: IState ;
  maxMarks: number;

  constructor(props: IProps) {
    super(props);
    this.state = {numMarks: 0}
    this.maxMarks = props.maxMarks;
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
    console.log('Rendering HelloWithMarks');
    return (
      <div>
          <Hello to={this.props.to} from={this.props.from} numMarks={this.state.numMarks} /> 
          <Button label='-' onClick={this.onDecrement} disabled={this.state.numMarks == 0} />
          <Button label='+' onClick={this.onIncrement} disabled={this.state.numMarks == this.maxMarks} />
      </div>
    );
  }
}
