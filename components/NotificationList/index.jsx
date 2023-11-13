import ToggleRadioButtons from '../toggleRadioButtons'
import { useState, useEffect } from 'react'
import useNotification from '../../hooks/useNotification'
const NotificationList = ({list, name}) => {
  const {getNotificationState} = useNotification()
  //no starter state here, later it should be one. First it needs to load everything so it does not change....
  const [activeButton, setActiveButton] = useState()
    //this function needs to know if the buttons are toggled or not
  useEffect(()=>{
    (async ()=>{
      setActiveButton(await getNotificationState(name))
    })()
  },[])
  return (
    <ToggleRadioButtons buttons={list} changeButton={setActiveButton} activeButton={activeButton}/>
  )
}

export default NotificationList