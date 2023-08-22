import { Link } from "expo-router"
import { View, Text } from "react-native"

const About = () => {
  return (
    <View>
        <Text>About us</Text>
        <Link href={"/"}>Home</Link>
    </View>
  )
}

export default About