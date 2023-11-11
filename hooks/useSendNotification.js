//import { useContext } from "react";
//import { NotificationContext } from "../context/notificationContext";
import * as Notifications from "expo-notifications"
const useSendNotification = ()=> {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  const sendNotification =async (title, body,dataContent,trigger)=>{
    console.log(title, body, dataContent, trigger)
    let status = await Notifications.scheduleNotificationAsync({
      content:{
        title:title,
         body:body,
         data: {data:dataContent}
      },
      trigger: trigger
    })
    console.log(status)
  }
  const cancelAllNotifications =async  ()=>{
    await Notifications.cancelAllScheduledNotificationsAsync()
  }
return {sendNotification, cancelAllNotifications}
}




export default useSendNotification