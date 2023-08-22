import { Link } from "expo-router";
import { Text, View } from "react-native";
import Area from "../components/area";
import DatePicker from "../components/datePicker";
import Button from "../components/button";
import InfoBox from "../components/infoBox";

const Test = () => {
  return (
    <View>
        <Text>Strøm info</Text>
        <DatePicker/>
        <Area/>
        <Button text="Finn" type={"outlined"}/>
        <InfoBox header={"Høyeste"} subheader={"134 kwt"} icon={""}/>
    </View>
  )
}

export default Test