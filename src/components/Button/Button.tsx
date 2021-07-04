import React, { ReactChild } from 'react';
import './Button.css';

type PropsType = {
  type: "button" | "submit" | "reset" | undefined,
  onClick?: ( )=> void,
  children?: ReactChild
}

const Button = (props: PropsType) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;