import { View, Text } from 'react-native'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SingleButton from './singleButton'
import text from '../../assets/style/text'
import { useContext } from 'react'
import  {SearchContext} from '../../context/searchContext'
import { useState } from 'react'
export default function DateSelector() {
    const {date,  setDate} = useContext(SearchContext)
    const [exDate, setExDate] = useState(new Date())
 
    const changeDate = (direction) => {
        let newDate = new Date(date)
        if(direction === "next") {
            if(exDate.getDate() <= newDate.getDate() && (newDate.getHours() <= exDate.getHours() && newDate.getMinutes() <= exDate.getMinutes()) ) return
            newDate.setDate(newDate.getDate() + 1)
        } else {
            newDate.setDate(newDate.getDate() - 1)
        }
        setDate(newDate)
    }
  return (
    <View style={[{display:"flex", flexDirection:"row",justifyContent:"space-between", width:"100%", paddingHorizontal:10, maxWidth:"100%", boxsizing:"border-box", }]}>
        <View style={[{display:"flex", gap:5, alignItems:"center"}]}>
            <Text style={[text.copy]}>Forrige</Text>
        <SingleButton onClickFunction={()=>{changeDate("prev")}} icon={faArrowLeft}/>
        </View>
        <View style={[{display:"flex", gap:5, alignItems:"center"}]}>
        { 
        (exDate.getDate() > new Date(date).getDate()) || 
        (exDate.getDate() === new Date(date).getDate() && (new Date(date).getHours() > 14 || (new Date(date).getHours() === 14 && new Date(date).getMinutes() >= 30))) ?
        <>
          <Text style={[text.copy]}>Neste</Text>
          <SingleButton onClickFunction={()=>{changeDate("next")}} icon={faArrowRight}/>
       </> : null
        }
        </View>
        </View>
  )
}