import colors from "./colors";
import text from "./text";
import { StyleSheet } from "react-native";

const areaSelect = StyleSheet.create({
  outerSelect: {
    marginTop: 30,
    margin: 10,
  },
  outerSelectSettings: {
    marginTop: 0,
    margin: 0,
    padding:0,
  },
  dropdown: {
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 40,
  },
  label: {
    textAlign: "center",
    color: colors.primary,
    paddingTop: 5,
    marginBottom: 10,
  },
  labelSettings: {
    textAlign: "left",
    color: colors.primary,
    paddingTop: 5,
    marginBottom: 10,
  },
  placeholder: {
    color: colors.secondary,
    textAlign: "center",
  },
  icon: {
    borderColor: colors.secondary,
    top:"100%"
  },
  checkBox: {
    checkboxSize: 25,
    checkboxStyle: {
      borderRadius: 40,
      padding: 4,
      backgroundColor: colors.secondary,
      borderColor: colors.primary,
    },
    checkboxLabelStyle: {
      color: colors.primary,
      fontSize: 16,
    },
  },
  checkBoxStyle: {
    padding: 7,
  },
});

export { areaSelect };
