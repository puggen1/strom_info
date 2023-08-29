import { useFonts } from "expo-font";
import Search from "../context/searchContext";
import SearchSection from "../components/searchSection";
const Test = () => {
  
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
    <Search>
      <SearchSection />
    </Search>
  )
}

export default Test