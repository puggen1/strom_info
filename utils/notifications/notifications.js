import { dailyPriceUpdate } from "./notificationFunctions"
import useNotification from "../../hooks/useNotification"
const {title, body, dataContent, trigger} = dailyPriceUpdate()
const {cancelNotification, sendNotification} = useNotification()
const notificationButtonList = {
    dailyPriceUpdate:[{id:0, text:"nei", function:()=>{cancelNotification("dailyPriceUpdate")}},{id:1, text:"ja", function:()=>{sendNotification(title, body, dataContent,trigger)}}]
}



export {notificationButtonList}