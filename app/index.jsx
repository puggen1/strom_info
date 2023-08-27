import { Button, Text, View } from "react-native";
import DatePicker from "../components/datePicker";

import { useFonts } from "expo-font";
import text from "../assets/style/text";
import layout from "../assets/style/layout";
import { useState } from "react";
import { baseUrl } from "../utils/constants";
import useFetch from "../hooks/useFetch";
import useDayGetter from "../hooks/useDayGetter";
const Test = () => {
  const {getToday, getTomorrow} = useDayGetter()
  console.log(getToday())
  console.log(getTomorrow())
  const [date, setDate] = useState(new Date());
  const handleDatePicker = (event, selectedDate) => {
    console.log(event.target)
    const {type} = event;
    if(type === 'dismissed'){
      return
    }
    if(type === 'set'){
      const currentDate = selectedDate;
      setDate(currentDate)
  }
  }
  const [loaded] = useFonts({
    "quicksand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "roboto-light": require("../assets/fonts/Roboto-Light.ttf"),
  });
  if(!loaded) return null;
  return (
    <View >
        <Text style={[text.header, layout.extraMargin, layout.extraPadding]}>Strøm info</Text>
        <DatePicker value={date} onChangeFunction={handleDatePicker}/>
    </View>
  )
}

export default Test