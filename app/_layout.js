import { Link, Slot } from "expo-router";
import text from "../assets/style/text";
import layout from "../assets/style/layout";
import { useCallback } from "react";
import { Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Search from "../context/searchContext";
import Currency from "../context/currencyFormattContext";
import { ScrollView } from "react-native";
import ActionBar from "../components/actionBar";
import PageController from "../context/pageContext";
import NotificationController from "../context/notificationContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faWrench } from "@fortawesome/free-solid-svg-icons";
SplashScreen.preventAutoHideAsync();

const HomeLayout = () => {

  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  library.add(faWrench, faSearch, faHome)
  return (
    <Search onLayout={onLayoutRootView}>
      <NotificationController>
      <PageController>
      <Currency>
        <SafeAreaView style={{flex:1,}}>
        <ScrollView horizontal={false} style={{}}>
          <Text
            style={[text.header, layout.extraMargin.small, layout.extraPadding]}
          >
           Strøm info
          </Text>
          <Slot />
        </ScrollView>
        </SafeAreaView>
        <ActionBar/>
      </Currency>
      </PageController>
      </NotificationController>
    </Search>
  );
};

export default HomeLayout;
