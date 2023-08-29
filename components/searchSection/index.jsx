import { View, Text } from 'react-native'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import DatePicker from '../datePicker'
import AreaSelect from '../areaSelect'
import Button from '../button'
import text from '../../assets/style/text'
import layout from '../../assets/style/layout'

export default function SearchSection() {
    const {date, setDate, area, setArea, searchFunction, data} = useContext(SearchContext)
    const handleDatePicker = (event, selectedDate) => {
      const {type} = event;
      if(type === 'dismissed'){
        return
      }
      if(type === 'set'){
        const currentDate = selectedDate;
        setDate(currentDate)
    }
    }
   console.log(data)
  return (
    <View>
          <Text style={[text.header, layout.extraMargin, layout.extraPadding]}>Strøm info</Text>
          <DatePicker value={date} onChangeFunction={handleDatePicker}/>
          <AreaSelect value={area} setValue={setArea}/>
          <Button type="main" text={"Sjekk Prisen"} event={searchFunction}/>
    </View>
  )
}