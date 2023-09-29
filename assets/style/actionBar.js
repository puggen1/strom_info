import { StyleSheet } from "react-native";
import colors from "./colors"
const actionBar = StyleSheet.create({
    height:100,
    flexDirection:"row",
    justifyContent:"space-evenly",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,   
    backgroundColor:colors.primary,
});

const actionBarItem = StyleSheet.create({
    default:{
        height:75,
        width:75,
        borderRadius:40,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:12,
    },
    main:{
    height:75,
    width:75,
    borderRadius:40,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.primary,
    position:"relative",
    top:-30,
    elevation:8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1, 
    zIndex:1,
},
    pressDown:{
        backgroundColor:colors.secondary,
        marginTop:12,

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
    mainActive:{
        height:75,
        width:75,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.white,
        borderColor:colors.primary,
        borderWidth:2,
        boxSizing: "'border-box'",
        position:"relative",
        top:-30,
        elevation:8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    pressDownMain:{
    backgroundColor:colors.secondary,
    }
})
const actionBarIcons = StyleSheet.create({

})
export  {actionBar, actionBarItem, actionBarIcons}