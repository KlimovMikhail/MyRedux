import React from "react";


export const Button = ({someColor, handleClick, text}) => {
  return <button style={{backgroundColor: someColor}} onClick={handleClick}>{text}</button>
};