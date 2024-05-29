import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from '../../../assets/style/colors'
import { Pressable } from 'react-native'
import { useState } from 'react'
export default function SingleButton({icon, onClickFunction}) {
    const [isPressed, setIsPressed] = useState(false)
  return (
   <>
             <Pressable onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}} onPress={onClickFunction} style={[{backgroundColor:(isPressed ? colors.primary : colors.secondary), borderRadius:100, padding:10 }]}><FontAwesomeIcon color={colors.white} icon={icon} size={30}/></Pressable>
   </>
  )
}