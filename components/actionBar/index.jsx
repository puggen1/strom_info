import { View, Text, TouchableWithoutFeedback } from 'react-native'
import {useState} from 'react'
import {actionBar as actionBarStyle, actionBarItem} from '../../assets/style/actionBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faSearch, faGear } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'


const ActionBar = ({}) => {
  const windows = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
  const [currentWindow, setCurrentWindow] = useState(windows[0]);

  const onPressFunction = (e, id)=>{
    console.log(e.target)
    console.log("clicked")
    setCurrentWindow(windows[id])
    console.log(currentWindow)
  }
  return (
    <View style={[actionBarStyle,]}>
      <TouchableWithoutFeedback onPress={(e)=>{onPressFunction(e, 0)}}><View style={[currentWindow.id === 0 ? actionBarItem.active : actionBarItem.default] }><Text><FontAwesomeIcon color={currentWindow.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/> </Text></View></TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={(e)=>{onPressFunction(e, 1)}}><View style={[currentWindow.id === 1 ? actionBarItem.active : actionBarItem.default] }><Text><FontAwesomeIcon color={currentWindow.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35} /></Text></View></TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={(e)=>{onPressFunction(e, 2)}}><View style={[currentWindow.id === 2 ? actionBarItem.active : actionBarItem.default] }><Text><FontAwesomeIcon color={currentWindow.id === 2 ? colors.primary : colors.white} icon={faGear} size={35} /></Text></View></TouchableWithoutFeedback>
    </View>
  )
}

export default ActionBar