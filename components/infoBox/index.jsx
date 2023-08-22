import { Text, View } from 'react-native'
import infoBoxStyles from '../../assets/style/infoBox'
import text from '../../assets/style/text'
const InfoBox = ({header, subheader, icon}) => {
  return (
    <View style={infoBoxStyles.main}>
      <Text  style={text.infoBox.header}>{header} {icon ? icon : ""}</Text>
      <Text style={text.infoBox.subheader}>{subheader}</Text>
    </View>
  )
}

export default InfoBox
