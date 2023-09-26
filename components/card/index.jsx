import { View, Text, Image } from 'react-native'
import {cardStyle, imageStyle, ColorLayer,overlay, overlayText} from '../../assets/style/card'
import textStyle from '../../assets/style/text'
const Card = ({image, text}) => {
  return (
    <View style={[cardStyle]}>
        <View style={[ColorLayer]}></View>
      <Image style={[imageStyle]} source={{uri:image}} />
      <View style={[overlay]}><Text style={[textStyle.header, overlayText]}>{text}</Text></View>
    </View>
  )
}

export default Card