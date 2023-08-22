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
});

export default buttons;
