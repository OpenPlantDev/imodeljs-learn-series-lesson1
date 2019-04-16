import React from 'react';
import {Button} from '../Button/Button';
import {IToolbarButton} from './IToolbarButton';

interface IProps {
  buttons: IToolbarButton[];
}

export const Toolbar = (props: IProps) => {
  return (
    <div>
      {props.buttons.map((button) => 
        <Button key={button.id} label={button.label} onClick={button.onClick} />
      )}
    </div>

  );
}