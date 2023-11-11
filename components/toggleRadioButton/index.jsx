import { Text,Pressable } from 'react-native'
import { useState } from 'react'
import textStyle from '../../assets/style/text'
import buttons from '../../assets/style/buttons'
const ToggleRadioButton = ({text, event, type}) => {
    const [pressed, setPressed] = useState(false)
    const togglePressed = ()=>{
        setPressed(!pressed)
    }
  return (
    <Pressable onPress={event} onPressIn={togglePressed} on onPressOut={togglePressed} style={[buttons.global, buttons.toggleradio, type === "active" && buttons.toggleradio.pressed, pressed && buttons.toggleradio.pressed]}>
      <Text style={[textStyle.button.toggleRadioButton, pressed && textStyle.button.toggleRadioButtonPressed, type === "active" && textStyle.button.toggleRadioButtonActive]}>{text}</Text>
    </Pressable>
  )
}

export default ToggleRadioButton