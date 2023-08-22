import { StyleSheet } from "react-native-web";

const layout = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container: { flex: 1 },
  extraPadding: { padding: 15 },
  extraMargin: { margin: 15 },
});

export default layout;
