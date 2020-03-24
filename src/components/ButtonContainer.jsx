import React from "react";
import {connect} from "react-redux";
import {Button} from "./Button";
import {setColorRed, setColorGreen, setColorBlue} from "../actions/colorActions";

export const ButtonContainer = (props) => (
  <>
    <Button someColor={props.color ? props.color : `red`} handleClick={props.setColorRed} text="Red"></Button>
    <Button someColor={props.color ? props.color : `green`} handleClick={props.setColorGreen} text="Green"></Button>
    <Button someColor={props.color ? props.color : `blue`} handleClick={props.setColorBlue} text="Blue"></Button>
  </>
)

const mapStateToProps = (state) => {
  return {
    color: state.color
  };
};

const mapDispatchToProps = {
  setColorRed,
  setColorGreen,
  setColorBlue
};

export const ButtonApp = connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);