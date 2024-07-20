import { Text, Pressable } from 'react-native'
import text from '../../assets/style/text'
import colors from '../../assets/style/colors'
import layout from '../../assets/style/layout'
const AndroidDateButton = ({event, date, searchPage}) => {
  return (
    <Pressable onPress={event} style={[ {borderRadius:5, backgroundColor:colors.primary, padding:15, maxWidth:200, marginLeft: searchPage ?"auto" : 10, marginRight:"auto"}]}>
      <Text style={[text.subheader, {color:colors.white, textAlign:"center"}]}>{date}</Text>
    </Pressable>
  )
}

export default AndroidDateButton