import ToggleRadioButtons from '../toggleRadioButtons'
import { Text, View } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import useNotification from '../../hooks/useNotification'
import colors from '../../assets/style/colors'
import text from '../../assets/style/text'
import {NotificationContext} from '../../context/notificationContext'
const NotificationList = ({list, name}) => {
  const {permissionStatus, isLoading} = useContext(NotificationContext)
  const {getNotificationState} = useNotification()
  //no starter state here, later it should be one. First it needs to load everything so it does not change....
  const [activeButton, setActiveButton] = useState()
    //this function needs to know if the buttons are toggled or not
    useEffect(()=>{
    (async ()=>{
      let state = await getNotificationState(name)
      setActiveButton(state)
    })()
  },[permissionStatus])
  return (<>
   {isLoading && <View><Text>Laster</Text></View>}
    {!isLoading &&
    <>
    <Text style={[text.copy, {color:colors.primary}]}>{list.title}</Text>
    <ToggleRadioButtons buttons={list.options} changeButton={setActiveButton} activeButton={activeButton}/>
    </>
}
    </>
  )
}

export default NotificationList