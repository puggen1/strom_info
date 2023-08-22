import { StyleSheet } from "react-native";
import colors from "./colors";
const text = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "light",
  },
  subheader: {
    fontSize: 24,
    fontWeight: "light",
  },
  copy: {
    fontSize: 16,
    fontWeight: "extra-light",
  },
  button: {
    default: {
      color: colors.white,
      textAlign: "center",
      fontSize: 20,
    },
    outlined: {
      color: colors.secondary,
      textAlign: "center",
      fontSize: 20,
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
