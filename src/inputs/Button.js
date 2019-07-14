import {withTheme} from 'react-native-material-ui'
import React from 'react'
import Button from "react-native-material-ui/src/Button";

const MyButton = (props) => {
  // it's really easy to get primary color everywhere in your app
  // const {primaryColor} = props.theme.palette;

  return <Button text={props.text}/>
};

export default MyButton