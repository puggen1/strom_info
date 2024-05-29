import { Link, Slot } from "expo-router";
import text from "../assets/style/text";
import layout from "../assets/style/layout";
import { useCallback } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Search from "../context/searchContext";
import Currency from "../context/currencyFormattContext";
import { ScrollView } from "react-native";
import ActionBar from "../components/actionBar";
import { headerSection } from "../assets/style/actionBar";
import PageController from "../context/pageContext";
import NotificationController from "../context/notificationContext";
import colors from "../assets/style/colors";
import { GeneralStatusBarStyle } from "../assets/style/statusBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
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
  
  
  return (
    <View onLayout={onLayoutRootView}>
    <Search >
      <NotificationController>
      <PageController>
      <Currency>
        <SafeAreaProvider style={[{backgroundColor:colors.primary}]}>
      <View style={[GeneralStatusBarStyle, { color:colors.primary }]}>
        <StatusBar translucent backgroundColor={colors.primary} />
        </View>
        <SafeAreaView style={{flex:1}}>
        <ScrollView horizontal={false} style={{ backgroundColor:"#fff"}}>
          <View style={[headerSection]}>
          <Text
            style={[text.header, layout.extraMargin.small, {color:colors.white}]}
          >
           Strøm info
          </Text>
          </View>
          <Slot />
        </ScrollView>
        </SafeAreaView>
        <ActionBar/>
        </SafeAreaProvider>
      </Currency>
      </PageController>
      </NotificationController>
    </Search>
    </View>
  );
};

export default HomeLayout;
