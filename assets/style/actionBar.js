import { StyleSheet } from "react-native";
import colors from "./colors"
const actionBar = StyleSheet.create({
    height:100,
    backgroundColor:colors.primary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems: "center",

})  
const actionBarItem = StyleSheet.create({
    default:{
        height:75,
        width:75,
        borderRadius:30,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
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