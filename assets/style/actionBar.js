import { StyleSheet } from "react-native";
import colors from "./colors"
const actionBar = StyleSheet.create({
    height:100,
    backgroundColor:colors.primary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flexDirection:"row",
    justifyContent:"space-evenly",

})  
const actionBarItem = StyleSheet.create({
    default:{
        height:75,
        width:75,
        borderRadius:40,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
    },
    main:{
    width:100,
    height:100,

    },
    pressDown:{
        backgroundColor:colors.secondary
    },
    active:{
        backgroundColor:colors.white,
        height:75,
        width:75,
        borderRadius:40,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"

    },
    mainActive:{}
})
const actionBarIcons = StyleSheet.create({

})
export  {actionBar, actionBarItem, actionBarIcons}