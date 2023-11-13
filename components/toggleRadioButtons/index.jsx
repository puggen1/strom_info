import { View } from 'react-native'
import ToggleRadioButton from '../toggleRadioButton'
const ToggleRadioButtons = ({buttons, changeButton, activeButton}) => {
  return (
    <View style={[{flexDirection:"row", flexWrap:"wrap"}]}>
      {buttons.map((button)=>{
        return <ToggleRadioButton key={button.id} text={button.text} type={button.id === activeButton ? "active": "default"} event={()=>{changeButton(button.id), button.function()}}/>
      })}
    </View>
  )
}

export default ToggleRadioButtons