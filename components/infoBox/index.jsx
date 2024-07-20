import { Text, View } from 'react-native'
import infoBoxStyles from '../../assets/style/infoBox'
import text from '../../assets/style/text'
import layout from '../../assets/style/layout'
import { useContext } from 'react'
import {CurrencyFormatterContext} from '../../context/currencyFormattContext'
import colors from '../../assets/style/colors'
const InfoBox = ({header, subheader, icon, additionalText=""}) => {
  const {currencyFormat, radioButtons} = useContext(CurrencyFormatterContext)
  return (
    <View style={[layout.extraMargin.vertical]}>
    <View style={[infoBoxStyles.main,]}>
    {additionalText && <Text style={[text.subheader,layout.centered, {color:colors.white}]}>{additionalText}</Text>}
      <Text  style={text.infoBox.header}>{header} {icon ? icon : ""}</Text>
      <Text style={text.infoBox.subheader}>{subheader} {radioButtons[currencyFormat - 1].label} pr kWt</Text>
    </View>
    </View>
  )
}

export default InfoBox
