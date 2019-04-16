import React from 'react';

interface IProps {
  label: string;
  onClick: () => void;

};

export const Button = (props: IProps) => {
  return (
    <button onClick={props.onClick}>{props.label}</button>

  );
}