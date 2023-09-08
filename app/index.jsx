import Search from "../context/searchContext";
import Currency from "../context/currencyFormattContext";
import Main from "../components/main";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import text from '../assets/style/text'
import layout from '../assets/style/layout'
import { Text } from "react-native";
import { ScrollView } from "react-native";
SplashScreen.preventAutoHideAsync();

const Test = () => {
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),  });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Search onLayout={onLayoutRootView}>
      <Currency>
        <ScrollView horizontal={false}>
      {/** header */}
<Text style={[text.header, layout.extraMargin.small, layout.extraPadding]}>Strøm info</Text>

      <Main/>
      {/** footer */}
      </ScrollView>
      </Currency>
    </Search>
  )
}

export default Test