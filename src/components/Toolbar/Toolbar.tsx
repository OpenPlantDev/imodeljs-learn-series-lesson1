import React from 'react';
import {Button, IButtonProps} from '../Button/Button';

export interface IToolbarButtonProps extends IButtonProps {
  id: string;
}

interface IProps {
  buttons: IToolbarButtonProps[];
}

export const Toolbar = (props: IProps) => {
  return (
    <div>
      {props.buttons.map((button) => 
        <Button key={button.id} label={button.label} onClick={button.onClick} disabled={button.disabled} />
      )}
    </div>

  );
}