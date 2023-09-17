import { Pressable } from "react-native"
import {actionBarItem } from "../../assets/style/actionBar"
const ActionBarButton = ({onPressFunction, id, icon, currentWindow, main}) =>{
  let style = [pressed ? actionBarItem.pressDown : actionBarItem.default, {zIndex:0.5}, currentWindow.id === id ? actionBarItem.active : actionBarItem.default, ]
  if(main){
    style = [pressed ? actionBarItem.pressDown : actionBarItem.main, {zIndex:0.5}, currentWindow.id === id ? actionBarItem.mainActive : actionBarItem.main,]
  }
  return (
      <Pressable  hitSlop={3} style={({pressed})=>style}  onPress={(e)=>{onPressFunction(e, id)}}>{icon}</Pressable>
  )
}

export default ActionBarButton