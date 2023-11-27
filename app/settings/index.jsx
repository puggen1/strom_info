import { View, Text, Button, Image, Switch } from 'react-native'
import { useContext, useState } from 'react'
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
  const [notificationStatus, setNotificationStatus] = useState(false)
  return (
    <View>
      <Text style={[text.header, {marginBottom:10}]}>Innstillinger</Text>
      <View style={[layout.extraPadding, {flexDirection:"row"}]}>
        <Text style={[text.subheader]}>Tillatt varsler</Text>
        <Switch
        trackColor={{true:colors.primary}}
        thumbColor={notificationStatus ? colors.primary : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e" value={notificationStatus} onValueChange={()=>{setNotificationStatus(!notificationStatus)}}/>
      </View>
      <Text style={[text.subheader, layout.extraMargin.horizontal]}>Varsle meg ...</Text>
      {/** notification when prices are updated */}
      <View style={[layout.extraPadding]}>
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