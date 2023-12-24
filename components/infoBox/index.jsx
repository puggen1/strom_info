import { Text, View } from 'react-native'
import infoBoxStyles from '../../assets/style/infoBox'
import text from '../../assets/style/text'
import layout from '../../assets/style/layout'
import { useContext } from 'react'
import {CurrencyFormatterContext} from '../../context/currencyFormattContext'
const InfoBox = ({header, subheader, icon, additionalText=""}) => {
  const {currencyFormat, radioButtons} = useContext(CurrencyFormatterContext)
  return (
    <View style={[layout.extraMargin.vertical]}>
          <Text style={[text.subheader,layout.centered]}>{additionalText}</Text>
    <View style={[infoBoxStyles.main,]}>
      <Text  style={text.infoBox.header}>{header} {icon ? icon : ""}</Text>
      <Text style={text.infoBox.subheader}>{subheader} {radioButtons[currencyFormat - 1].label} pr kWt</Text>
    </View>
    </View>
  )
}

export default InfoBox
