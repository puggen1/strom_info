import { View, Text, Pressable, Button } from 'react-native'
import {useState} from 'react'
import {actionBar as actionBarStyle, actionBarItem} from '../../assets/style/actionBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faSearch, faGear } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'


const ActionBar = ({}) => {
  const windows = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
  const [currentWindow, setCurrentWindow] = useState(windows[0]);

  const onPressFunction = (e, id)=>{
    console.log("pressed")
    setCurrentWindow(windows[id])

  }
  return (
    <View style={[actionBarStyle,]}>
<Pressable  hitSlop={3} style={[{zIndex:0.5}, currentWindow.id === 0 ? actionBarItem.active : actionBarItem.default ]} onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 0)}}><FontAwesomeIcon color={currentWindow.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/></Pressable>
<Pressable hitSlop={3} style={[{zIndex:0.5}, currentWindow.id === 1 ? actionBarItem.active : actionBarItem.default ]} onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 1)}}><FontAwesomeIcon color={currentWindow.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35} /></Pressable>
<Pressable hitSlop={3} style={[{zIndex:0.5}, currentWindow.id === 2 ? actionBarItem.active : actionBarItem.default ]} onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 2)}}><FontAwesomeIcon color={currentWindow.id === 2 ? colors.primary : colors.white} icon={faGear} size={35} /></Pressable>

    </View>
  )
}

export default ActionBar

/**
 * <Text><FontAwesomeIcon color={currentWindow.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/> </Text>
<Text><FontAwesomeIcon color={currentWindow.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35} /></Text>
<Text><FontAwesomeIcon color={currentWindow.id === 2 ? colors.primary : colors.white} icon={faGear} size={35} /></Text>
 */
/**
 *  <Pressable hitSlop={3} style={{zIndex:0.5}} onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 0)}}><Text style={[currentWindow.id === 0 ? actionBarItem.active : actionBarItem.default] }><FontAwesomeIcon color={currentWindow.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/></Text></Pressable>
      <Pressable hitSlop={3} style={{zIndex:0.5}} onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 1)}}><Text style={[currentWindow.id === 1 ? actionBarItem.active : actionBarItem.default] }> <FontAwesomeIcon color={currentWindow.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35} /></Text></Pressable>
      <Pressable hitSlop={3} style={{zIndex:0.5}}  onPressIn={()=>{console.log("pressIn")}} onPressOut={()=>{console.log("pressOut")}} onPress={(e)=>{onPressFunction(e, 2)}}><Text style={[currentWindow.id === 2 ? actionBarItem.active : actionBarItem.default] }><FontAwesomeIcon color={currentWindow.id === 2 ? colors.primary : colors.white} icon={faGear} size={35} /></Text></Pressable>
 */