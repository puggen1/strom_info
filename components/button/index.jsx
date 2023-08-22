import { View, Text, Pressable } from 'react-native';
import buttons from "../../assets/style/buttons";
import textStyle from '../../assets/style/text';
const Button = ({text, type}) => {
  return (
    <Pressable style={ type === "main" ? buttons.main : buttons.outlined}><Text style={type === "main" ? textStyle.button.default : textStyle.button.outlined}>{text}</Text></Pressable>
  )
}

export default Button