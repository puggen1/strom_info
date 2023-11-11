import { StyleSheet } from "react-native";
import colors from "./colors";
const buttons = StyleSheet.create({
  global: {
    borderRadius: 25,
    padding: 6,
    margin: 5,
    minWidth: 100,
  },
  main: {
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
    pressed: {
      backgroundColor: colors.white,
      borderColor: colors.secondary,
    },
  },
  outlined: {
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  toggleradio:{
    backgroundColor:colors.white,
    borderBlockColor:colors.primary,
    borderWidth:1,
    borderRadius:5,
    minWidth: 75,
    pressed:{
      backgroundColor:colors.primary
    }
  }
});

export default buttons;
