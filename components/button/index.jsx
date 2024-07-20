import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import buttons from "../../assets/style/buttons";
import textStyle from '../../assets/style/text';
const Button = ({text, type="main", event, label}) => {
  const [pressed, setPressed] = useState(false);
  const togglePressed = () => {
    setPressed(!pressed);
  }
  if(type === "main"){
    return (
      <Pressable accessibilityLabel={label} focusable={true} onPress={event} onPressIn={togglePressed} onPressOut={togglePressed} on style={[buttons.global, buttons.main, pressed && buttons.main.pressed]}><Text style={[textStyle.button.default, pressed && textStyle.button.outlined]}>{text}</Text></Pressable>
    )
  }
  return (
    <Pressable accessibilityLabel={label} focusable={true} onPress={event} onPressIn={togglePressed} onPressOut={togglePressed} style={[buttons.global, buttons.outlined]}><Text style={[textStyle.button.outlined]}>{text}</Text></Pressable>
  )
}

export default Button