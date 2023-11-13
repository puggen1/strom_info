import { View, Text, Button } from 'react-native'
import { useContext } from 'react'
import useNotification from '../../hooks/useNotification'
import { NotificationContext } from '../../context/notificationContext'
import text from '../../assets/style/text'
import colors from '../../assets/style/colors'
import layout from '../../assets/style/layout'
import { notificationButtonList } from '../../utils/notifications/notifications'
import NotificationList from '../../components/NotificationList'
const Settings = () => {  
  const {registerForPushNotificationsAsync, setExpoPushToken} = useContext(NotificationContext)
  const {getAllNotifications} = useNotification()
  return (
    <View>
      <Text style={[text.header, {marginBottom:10}]}>Innstillinger</Text>
      <Text style={[text.subheader, layout.extraMargin.horizontal]}>Varsle meg ...</Text>
      {/** notification when prices are updated */}
      <View style={[layout.extraPadding]}>
        <Text style={[text.copy, {color:colors.primary}]}>Når strømpriser er oppdatert</Text>
        {
          Object.entries(notificationButtonList).map(([name,list],i)=>{
           return ( <NotificationList key={i} list={list} name={name}/>)
          })
        }
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