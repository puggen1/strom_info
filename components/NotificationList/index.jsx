import ToggleRadioButtons from '../toggleRadioButtons'
import { Text, View } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import useNotification from '../../hooks/useNotification'
import colors from '../../assets/style/colors'
import text from '../../assets/style/text'
import {NotificationContext} from '../../context/notificationContext'
import articleSection from '../../assets/style/articleSection'
import layout from '../../assets/style/layout'
const NotificationList = ({list, name}) => {
  const {permissionStatus, isLoading} = useContext(NotificationContext)
  const {getNotificationState} = useNotification()
  //no starter state here, later it should be one. First it needs to load everything so it does not change....
  const [activeButton, setActiveButton] = useState()
    //this function needs to know if the buttons are toggled or not
    useEffect(()=>{
    (async ()=>{
      let state = await getNotificationState(name)
      //stops buttonspamming from damaging the await logic and still working well (?)
      //not fully fixed, but better....
      if(state === activeButton){
        return
      }
      else{
        setActiveButton(state)
      }
      
    })()
  },[permissionStatus])
  return (<>
   {isLoading && <View><Text>Laster</Text></View>}
    {!isLoading &&
    <View style={[articleSection, layout.extraMargin.horizontal, {marginTop:0}]}>
    <Text style={[text.copy, {color:colors.primary}]}>{list.title}</Text>
    <ToggleRadioButtons transparent={true} buttons={list.options} changeButton={setActiveButton} activeButton={activeButton}/>
    </View>
}
    </>
  )
}

export default NotificationList