import { View } from "react-native";
import ClickableCard from "../components/clickableCard";
import { homeContent } from "../assets/style/homeContent";
const Home = () => {
  const test = ()=>{

  }
  return (
      <View>
        <View style={[homeContent]}>
        <ClickableCard onClickFunction={test} text={"Hvordan bruke appen"} image={"https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80"}/>
        <ClickableCard onClickFunction={test} text={"Hva er nytt - ver 1.2.1"} image={"https://images.unsplash.com/photo-1560416313-414b33c856a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"}/>
        <ClickableCard onClickFunction={test} text={"Strøm nyheter"} image={"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"}/>
        </View>
      </View>
  )
}

export default Home