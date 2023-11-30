import { View, Text, Switch } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import useNotification from '../../hooks/useNotification';
import { NotificationContext } from '../../context/notificationContext';
import text from '../../assets/style/text';
import colors from '../../assets/style/colors';
import layout from '../../assets/style/layout';
import { notificationButtonList } from '../../utils/notifications/notifications';
import NotificationList from '../../components/NotificationList';
import * as Notifications from "expo-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = () => {  
  const [permissionStatus, setPermissionStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  /**
   * before loading it will get the permission status so it can show the switch in the right posistion
   */
  useEffect(()=>{
    (async ()=> {
      await loadAsyncStorage();
    })()
  },[])
  //funker
  const loadAsyncStorage = async ()=> {
    try{
      const status = await AsyncStorage.getItem("notificationStatus");
      if(status !== null){
        setPermissionStatus(JSON.parse(status));
      }
    }
    catch(error){
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  }
  const saveNotificationStatus = async (status) =>{
    try{
    await AsyncStorage.setItem("notificationStatus", JSON.stringify(status))
  }catch(error){
    console.log(error)
  }
  }
  const {registerForPushNotificationsAsync, setExpoPushToken} = useContext(NotificationContext)
  const {getAllNotifications} = useNotification()
  //this works, but lives its own life, if will cancel all or enable itself, but need logic to update all buttons and to update itself when enabling a notification again
  const togglePermissions = async ()=>{
    let newPermissionStatus = !permissionStatus
    setPermissionStatus(newPermissionStatus)
     saveNotificationStatus(newPermissionStatus)

    if(newPermissionStatus){
      await Notifications.requestPermissionsAsync()
    }
    else{
      await Notifications.cancelAllScheduledNotificationsAsync();
      //update state here.....
      
   }
  }
  return (
    <>
    {isLoading && <View><Text>Laster</Text></View>}
    {!isLoading && <View>
      <Text style={[text.header, {marginBottom:10}]}>Innstillinger</Text>
      <View style={[layout.extraPadding, {flexDirection:"row"}]}>
        <Text style={[text.subheader]}>Tillatt varsler</Text>
        <Switch
        trackColor={{true:colors.primary}}
        /*thumbColor={permissionStatus ? colors.primary : '#f4f3f4'}*/
        ios_backgroundColor="#3e3e3e" value={permissionStatus} onValueChange={()=>{togglePermissions()}}/>
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
    </View>}
    </>
  )
}

export default Settings