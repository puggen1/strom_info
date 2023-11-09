import { View, Text, Button } from 'react-native'
import { useContext, useState } from 'react'
import useSendNotification from '../../hooks/useSendNotification'
import { NotificationContext } from '../../context/notificationContext'
import ToggleRadioButtons from '../../components/toggleRadioButtons'
const Settings = () => {  
  const [activeButton, setActiveButton] = useState(0)
  const notifyWhenUpdated = [{id:0, text:"nei", function:()=>{console.log("nei")}},{id:1, text:"ja", function:()=>{console.log("ja")}}]
  const {registerForPushNotificationsAsync, setExpoPushToken} = useContext(NotificationContext)
  const {sendNotification, cancelAllNotifications} = useSendNotification()
  return (
    <View>
      <Text>Settings</Text>
      <ToggleRadioButtons buttons={notifyWhenUpdated} changeButton={setActiveButton} activeButton={activeButton}/>
      <Button title='Activate Notifications' onPress={()=>{registerForPushNotificationsAsync().then((token)=>{setExpoPushToken(token)})}}/>
      <Button title='testNotifications' onPress={()=>{sendNotification("test", "test", {title:"test"}, {seconds:60, repeats:true})}}/>
      <Button title='Turn off scheduled notifications' onPress={()=>{cancelAllNotifications()}}/>

    </View>
  )
}

export default Settings