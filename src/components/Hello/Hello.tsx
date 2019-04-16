import React from 'react';

interface IProps {
  to: string;
  from?: string;
  numMarks: number;
}

export const Hello = (props: IProps) => {
  const marks: string = props.numMarks <= 0 ? '' : '!'.repeat(props.numMarks);
  return (
    <h4>Hello {props.to}{props.from ? ` from ${props.from}` : ''}{marks}</h4>

  );
}