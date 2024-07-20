import { StyleSheet } from "react-native";
import colors from "./colors";
const infoBox = StyleSheet.create({
  main: {
    borderRadius: 20,
    backgroundColor: colors.primary,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: 150,
    margin: 5,
    marginBottom:10,
    marginTop:10
  },
});

export default infoBox;
