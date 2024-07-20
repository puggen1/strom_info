import { StyleSheet, Platform, StatusBar } from "react-native"

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight;


const GeneralStatusBarStyle = StyleSheet.create({
    height: STATUSBAR_HEIGHT,
})

export {GeneralStatusBarStyle}