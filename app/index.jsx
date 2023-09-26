import { View, Text } from "react-native";
import Card from "../components/card";
const Home = () => {
  return (
    <>
      {/** header */}
      <View>
        <Card text={"Hvordan bruke appen"} image={"https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80"}/>
      </View>
      {/** footer */}
      </>
  )
}

export default Home