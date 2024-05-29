import { View, Text } from 'react-native'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'
import SingleButton from './singleButton'
import text from '../../assets/style/text'
export default function DateSelector() {
  return (
    <View style={[{display:"flex", flexDirection:"row",justifyContent:"space-between", width:"100%", paddingHorizontal:10, maxWidth:"100%", boxsizing:"border-box" }]}>
        <View style={[{display:"flex", gap:5, alignItems:"center"}]}>
            <Text style={[text.copy]}>Forrige</Text>
        <SingleButton onClickFunction={()=>{console.log("test")}} icon={faArrowLeft}/>
        </View>
        <View style={[{display:"flex", gap:5, alignItems:"center"}]}>
            <Text style={[text.copy]}>Neste</Text>
        <SingleButton onClickFunction={()=>{console.log("test")}} icon={faArrowRight}/>
        </View>
        </View>
  )
}