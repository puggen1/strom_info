import { dailyPriceUpdate } from "./notificationFunctions"
import useNotification from "../../hooks/useNotification"
const {title: dailyTitle, body:dailyBody, dataContent:dailyDataContent, trigger:dailytrigger} = dailyPriceUpdate()
const {cancelNotification, sendNotification} = useNotification()
const notificationButtonList = {
    dailyPriceUpdate:{
        title:"Når strømpriser er oppdatert",
        options:[{id:0, text:"nei", function:()=>{cancelNotification("dailyPriceUpdate")}},
        {id:1, text:"ja", function:()=>{sendNotification(dailyTitle, dailyBody, dailyDataContent, dailytrigger)}}]},
      
}



export {notificationButtonList}