import { createContext, useState, useRef, useEffect } from "react";
import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationContext = createContext()

const NotificationController = ({children})=>{
    const [expoPushToken, setExpoPushToken] = useState("")
    const [notification, setNotification] = useState(false);
    const {notificationStatus, setNotificationStatus} = useState(false)
    const [permissionStatus, setPermissionStatus] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const notificationListener = useRef();
    const responseListener = useRef();
    useEffect(() => {
      (async ()=>{
        let { status: existingStatus } = await Notifications.getPermissionsAsync();
        return existingStatus
      })()
      .then((existingStatus)=>{
        if(existingStatus == "granted"){
          notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
          });
          responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
          });
        }
        else{
        }
      })
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, [expoPushToken]);
      
      const registerForPushNotificationsAsync = async ()=>{
        let token;
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync({ projectId: 'bfc738a2-bb3e-4425-91d1-67b20ef18a80' })).data;
      } else {
        alert('Must use physical device for Push Notifications');
      }
      return token;
    }

//notification status
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
        return (
        <NotificationContext.Provider value={{expoPushToken, notification, registerForPushNotificationsAsync, setExpoPushToken, notificationStatus, saveNotificationStatus, isLoading, permissionStatus, setPermissionStatus}}>
            {children}
        </NotificationContext.Provider>
    )
}


export {NotificationContext}
export default NotificationController
