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
  extraMargin: { 
    small:{
    margin: 10
  },
  medium:{
    margin:15
  },
  large:{
    margin:20
  },
  vertical:{
    marginTop:10,
    marginBottom:10,
  },
  
  horizontal:{
    marginLeft:10,
    marginRight:10,  }

},
});

export default layout;
