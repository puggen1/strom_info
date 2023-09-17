import { View, Text, Pressable, Button } from 'react-native'
import {useState} from 'react'
import {actionBar as actionBarStyle, actionBarItem} from '../../assets/style/actionBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faSearch, faGear } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'
import ActionBarButton from '../actionBarButton'
const ActionBar = ({}) => {
  const windows = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
  const [currentWindow, setCurrentWindow] = useState(windows[0]);

  const onPressFunction = (e, id)=>{
    setCurrentWindow(windows[id])

  }
  return (
    <View style={[actionBarStyle,]}>
      <ActionBarButton onPressFunction={onPressFunction} id={0} icon={<FontAwesomeIcon color={currentWindow.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/>} currentWindow={currentWindow}/>
      <ActionBarButton onPressFunction={onPressFunction} id={1} icon={<FontAwesomeIcon color={currentWindow.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35}/>} currentWindow={currentWindow} main={true}/>
      <ActionBarButton onPressFunction={onPressFunction} id={2} icon={<FontAwesomeIcon color={currentWindow.id === 2 ? colors.primary : colors.white} icon={faGear} size={35}/>} currentWindow={currentWindow}/>
    </View>
  )
}

export default ActionBar