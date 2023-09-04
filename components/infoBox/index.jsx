import { Text, View } from 'react-native'
import infoBoxStyles from '../../assets/style/infoBox'
import text from '../../assets/style/text'
import layout from '../../assets/style/layout'
const InfoBox = ({header, subheader, icon, additionalText=""}) => {
  return (
    <View style={[layout.extraMargin.vertical]}>
    <View style={[infoBoxStyles.main,]}>
      <Text  style={text.infoBox.header}>{header} {icon ? icon : ""}</Text>
      <Text style={text.infoBox.subheader}>{subheader}</Text>
    </View>
    <Text style={[text.subheader,layout.centered]}>{additionalText}</Text>
    </View>
  )
}

export default InfoBox
