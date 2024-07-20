import { StyleSheet } from "react-native";
import colors from "./colors";

const card = StyleSheet.create({
    width:"100%",
    height:200,
    marginLeft:"auto",
    marginRight:"auto",
    position:'relative',
});

const image = StyleSheet.create({
    height:"100%",
    width:"100%",
    borderRadius: 20
});

const ColorLayer = StyleSheet.create({
    backgroundColor: colors.primary,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    width:"100%",
    height:"100%",
    borderRadius:20,
})
const overlay = StyleSheet.create({
    width:"100%",
    height:"100%",
    position:"absolute",
    alignContent:'center',
    justifyContent: 'center',
    zIndex:2
})

export  {card as cardStyle, image as imageStyle, ColorLayer, overlay}