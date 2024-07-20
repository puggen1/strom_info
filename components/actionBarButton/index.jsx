import { Pressable, Text } from "react-native"
import {actionBarItem } from "../../assets/style/actionBar"
const ActionBarButton = ({onPressFunction, id, icon, currentWindow, main, label}) =>{
  let style = ({pressed})=> [pressed ? actionBarItem.pressDown : actionBarItem.default, {zIndex:0.5}, currentWindow.id === id ? actionBarItem.active : actionBarItem.default, ]
  if(main){
    style = ({pressed})=> [pressed ? actionBarItem.pressDownMain : actionBarItem.main, {zIndex:0.5}, currentWindow.id === id ? actionBarItem.mainActive : actionBarItem.main,]
  }
  return (
      <Pressable  hitSlop={3} style={style} accessibilityLabel={label}  onPress={(e)=>{onPressFunction(e, id)}}>{icon}</Pressable>
  )
}

export default ActionBarButton