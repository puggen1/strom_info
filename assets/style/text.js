import { StyleSheet } from "react-native";
import colors from "./colors";
const text = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "light",
    fontFamily: "Quicksand-Light",
    textAlign: "center",
    color: colors.primary,
  },
  subheader: {
    fontSize: 24,
    fontWeight: "light",
    fontFamily: "Quicksand-Light",
    color: colors.primary,
  },
  copy: {
    fontSize: 18,
    fontWeight: "ultralight",
    fontFamily: "Roboto-Light",
  },
  button: {
    default: {
      color: colors.white,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "regular",
      fontFamily: "Roboto-Regular",
    },
    outlined: {
      color: colors.secondary,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "regular",
      fontFamily: "Roboto-Regular",
    },
  },
  infoBox: {
    header: {
      fontSize: 24,
      fontWeight: "light",
      color: colors.white,
    },
    subheader: {
      fontSize: 16,
      fontWeight: "light",
      color: colors.white,
    },
  },
  card:{
    fontSize:32,
    color:colors.white,
    fontFamily:"Roboto-Regular",
    fontWeight: "medium",
    textAlign:"center",
    width:"100%",},
});

export default text;
