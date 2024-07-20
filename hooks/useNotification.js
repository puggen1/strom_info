
import * as Notifications from "expo-notifications"
const useNotification = ()=> {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  const sendNotification =async (title, body,dataContent,trigger)=>{
    let status = await Notifications.scheduleNotificationAsync({
      content:{
        title:title,
         body:body,
         data: {data:dataContent}
      },
      trigger: trigger
    })
  }
  const cancelAllNotifications =async  ()=>{
    await Notifications.cancelAllScheduledNotificationsAsync()
  }
  const cancelNotification = async (name)=>{
    let notifications = await getAllNotifications()
    notifications.forEach((notification)=>{
      if(notification.content.data.data.name === name){
        Notifications.cancelScheduledNotificationAsync(notification.identifier)
      }
    })
  }
  const getAllNotifications = async ()=>{
    return await Notifications.getAllScheduledNotificationsAsync()
  }
  const updateNotificationList = async ()=> {
    //gets all notifications
    let notifications = await Notifications.getAllScheduledNotificationsAsync()
  }
  const getNotificationState = async(name)=>{
    let notifications = await  getAllNotifications()
    let posistion = 0
    notifications.forEach((notification)=>{
      if(notification.content.data.data.name === name){
        posistion = notification.content.data.data.posistion
      }
    })
    return posistion
    }
return {sendNotification, cancelAllNotifications,cancelNotification, getAllNotifications, getNotificationState}
}
export default useNotification

