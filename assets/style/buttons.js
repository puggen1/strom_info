import { StyleSheet } from "react-native";
import colors from "./colors";
const buttons = StyleSheet.create({
  main: {
    borderRadius: 25,
    backgroundColor: colors.secondary,
    padding: 5,
    margin: 5,
  },
  outlined: {
    borderRadius: 25,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
});

export default buttons;
