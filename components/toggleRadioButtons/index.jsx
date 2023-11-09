import { View } from 'react-native'
import React from 'react'
import Button from '../button'
const ToggleRadioButtons = ({buttons, changeButton, activeButton}) => {
  return (
    <View>
      {buttons.map((button)=>{
        console.log(button.id === activeButton)
        return <Button key={button.id} text={button.text} type={button.id === activeButton ? "main": "outlined"} event={()=>{changeButton(button.id), button.function()}}/>
      })}
    </View>
  )
}

export default ToggleRadioButtons