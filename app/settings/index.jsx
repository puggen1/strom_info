import { View, Text, Switch } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import useNotification from '../../hooks/useNotification';
import { NotificationContext } from '../../context/notificationContext';
import {SearchContext} from '../../context/searchContext';
import text from '../../assets/style/text';
import colors from '../../assets/style/colors';
import layout from '../../assets/style/layout';
import { notificationButtonList } from '../../utils/notifications/notifications';
import NotificationList from '../../components/NotificationList';
import * as Notifications from "expo-notifications";
import articleSection from '../../assets/style/articleSection';
import AreaSelect from '../../components/areaSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = () => {  
  //putting the notificationButtonList inside a state for rendering
  const [allButtons, setAllButtons] = useState(notificationButtonList)
  /**
   * before loading it will get the permission status so it can show the switch in the right posistion
   */
  
  const {registerForPushNotificationsAsync, setExpoPushToken, saveNotificationStatus, isLoading, permissionStatus, setPermissionStatus} = useContext(NotificationContext)
  const {getAllNotifications} = useNotification()
  //this works, but lives its own life, if will cancel all or enable itself, but need logic to update all buttons and to update itself when enabling a notification again
  const togglePermissions = async ()=>{
    let newPermissionStatus = !permissionStatus
    if(newPermissionStatus){
      await Notifications.requestPermissionsAsync()
    }
    else{
      await Notifications.cancelAllScheduledNotificationsAsync()
   }
    setPermissionStatus(newPermissionStatus)
     saveNotificationStatus(newPermissionStatus)

  
  }
  // preffered area
  const [area, setArea] = useState()
  const {loadAsyncStatus} = useContext(SearchContext)
  useEffect(()=>{
    loadAsyncStatus(setArea)
  },[])
  const updatePreferredArea = async(area)=>{
    try{
      if(!Boolean(area)){
      await AsyncStorage.removeItem("preferredArea")
      }
      else{
        await AsyncStorage.setItem("preferredArea", area)
      }
    }
    catch(error){console.log(error)}
  }
  return (
    <>
    {isLoading && <View><Text>Laster</Text></View>}
    {!isLoading && <View>
      <Text style={[text.header, {marginBottom:10}]}>Innstillinger</Text>
      <View style={[articleSection, layout.extraMargin.horizontal, {marginTop:0}]}>
        <Text style={[text.subheader, {textAlign:"center", marginBottom:15}]}>Varslinger</Text>
        <View style={{flexDirection:"row", gap:10, marginBottom:10}}>
      <Text style={[text.copy,{alignSelf:"center", color:colors.primary}]}>Tillatt varsler</Text>
        <Switch
        style={{alignSelf:"center"}}
        trackColor={{true:colors.primary}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e" value={permissionStatus} onValueChange={()=>{togglePermissions()}}/>
        </View>
      {/** notification when prices are updated */}
        {
        
          Object.entries(allButtons).map(([name,list],i)=>{
           return ( <NotificationList key={i} list={list} name={name}/>)
          })
          
        }
        </View>
        <View style={articleSection}>
          <Text style={[text.subheader,{textAlign:"center", color:colors.primary, marginBottom:15}]}>Område</Text>
          <AreaSelect settingsPage={true} value={area} setValue={setArea} preferredFunction={updatePreferredArea}/>
        </View>
    </View>}
    </>
  )
}

export default Settings