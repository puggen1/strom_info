import { StyleSheet } from "react-native";
import colors from "./colors"
const actionBar = StyleSheet.create({
    height:100,
    backgroundColor:colors.primary,
    borderRadius:"35 35 0 0",
   
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems: "center"

})  
const actionBarItem = StyleSheet.create({
    default:{
        height:75,
        width:75,
        borderRadius:30,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    active:{
        backgroundColor:colors.white,
        height:75,
        width:75,
        borderRadius:30,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"

    }
})
const actionBarIcons = StyleSheet.create({

})
export  {actionBar, actionBarItem, actionBarIcons}