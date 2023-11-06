//import { useContext } from "react";
//import { NotificationContext } from "../context/notificationContext";
import * as Notifications from "expo-notifications"
const useSendNotification = ()=> {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const sendNotification =async (title, body,dataContent,trigger)=>{
    await Notifications.scheduleNotificationAsync({
      content:{
        title:title,
         body:body,
         data: {data:dataContent}
      },
      trigger: trigger
    })
  }
return {sendNotification}
}




export default useSendNotification