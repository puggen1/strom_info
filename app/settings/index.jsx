import { View, Text, Button } from 'react-native'
import { useContext, useState } from 'react'
import useSendNotification from '../../hooks/useSendNotification'
import { NotificationContext } from '../../context/notificationContext'
import ToggleRadioButtons from '../../components/toggleRadioButtons'
import text from '../../assets/style/text'
import colors from '../../assets/style/colors'
import layout from '../../assets/style/layout'
import { updatedPrices } from '../../utils/notifications/updatedPrices'
const Settings = () => {  
  const [activeButton, setActiveButton] = useState(0)
  let time = updatedPrices()
  const notifyWhenUpdated = [{id:0, text:"nei", function:()=>{console.log("nei")}},{id:1, text:"ja", function:()=>{sendNotification(title="testing",body="dette er en test", dataContent={}, trigger={ hour:time.getHours(), minute:time.getMinutes(), repeats:true})}}]
  const {registerForPushNotificationsAsync, setExpoPushToken} = useContext(NotificationContext)
  const {sendNotification, cancelAllNotifications} = useSendNotification()
  return (
    <View>
      <Text style={[text.header, {marginBottom:10}]}>Innstillinger</Text>
      <Text style={[text.subheader, layout.extraMargin.horizontal]}>Varsle meg ...</Text>
      {/** notification when prices are updated */}
      <View style={[layout.extraPadding]}>
        <Text style={[text.copy, {color:colors.primary}]}>Når strømpriser er oppdatert</Text>
      <ToggleRadioButtons buttons={notifyWhenUpdated} changeButton={setActiveButton} activeButton={activeButton}/>
      </View>
      {/**
      <Button title='Activate Notifications' onPress={()=>{registerForPushNotificationsAsync().then((token)=>{setExpoPushToken(token)})}}/>
      <Button title='testNotifications' onPress={()=>{sendNotification("test", "test", {title:"test"}, {seconds:60, repeats:true})}}/>
      <Button title='Turn off scheduled notifications' onPress={()=>{cancelAllNotifications()}}/>
  */}
    </View>
  )
}

export default Settings