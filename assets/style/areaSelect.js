import colors from "./colors";
import text from "./text";
import { StyleSheet } from "react-native";

const areaSelect = StyleSheet.create({
  outerSelect: {
    marginTop: 30,
    margin: 10,
  },
  dropdown: {
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderRadius: 40,
  },
  label: {
    textAlign: "center",
    color: colors.primary,
    paddingTop: 5,
  },
  placeholder: {
    color: colors.secondary,
    textAlign: "center",
  },
  icon: {
    borderColor: colors.secondary,
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
