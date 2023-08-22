import { StyleSheet } from "react-native";
import colors from "./colors";
const text = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "light",
    fontFamily: "quicksand",
    textAlign: "center",
    color: colors.primary,
  },
  subheader: {
    fontSize: 24,
    fontWeight: "light",
    fontFamily: "quicksand",
    color: colors.primary,
  },
  copy: {
    fontSize: 18,
    fontWeight: "extra-light",
    fontFamily: "roboto",
  },
  button: {
    default: {
      color: colors.white,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "regular",
      fontFamily: "roboto",
    },
    outlined: {
      color: colors.secondary,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "regular",
      fontFamily: "roboto",
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
});

export default text;
