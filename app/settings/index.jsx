import { View, Text } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import * as Device from "expo-device"
import * as Notifications from "expo-notifications"
import { Button } from 'react-native'
import app from '../../firebase/firebaseConfig'
const Settings = () => {  
  const [expoPushToken, setExpoPushToken] = useState("")


  async function registerForPushNotificationsAsync() {
    //the device token
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




  return (
    <View>
      <Text>Settings</Text>
      <Button title='allow notifications' onPress={()=>{registerForPushNotificationsAsync().then(token => setExpoPushToken(token))}}/>
    </View>
  )
}

export default Settings