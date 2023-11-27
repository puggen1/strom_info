import ToggleRadioButtons from '../toggleRadioButtons'
import { Text } from 'react-native'
import { useState, useLayoutEffect } from 'react'
import useNotification from '../../hooks/useNotification'
import colors from '../../assets/style/colors'
import text from '../../assets/style/text'
const NotificationList = ({list, name}) => {
  const {getNotificationState} = useNotification()
  //no starter state here, later it should be one. First it needs to load everything so it does not change....
  const [activeButton, setActiveButton] = useState()
    //this function needs to know if the buttons are toggled or not
    useLayoutEffect(()=>{
    (async ()=>{
      setActiveButton(await getNotificationState(name))
    })()
  },[])
  return (<>
    <Text style={[text.copy, {color:colors.primary}]}>{list.title}</Text>
    <ToggleRadioButtons buttons={list.options} changeButton={setActiveButton} activeButton={activeButton}/>
    </>
  )
}

export default NotificationList