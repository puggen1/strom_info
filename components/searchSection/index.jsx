import { View } from 'react-native'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import DatePicker from '../datePicker'
import AreaSelect from '../areaSelect'
import Button from '../button'
import useHandleDatePicker from '../../hooks/useHandleDatePicker'
export default function SearchSection() {
  const {handleDate} = useHandleDatePicker()
    const {date, setDate, area, setArea, searchFunction, data} = useContext(SearchContext)
  return (
    <View>
          <DatePicker value={date} onChangeFunction={handleDate} searchPage={true} />
          <AreaSelect value={area} setValue={setArea}/>
          <Button type="main" text={"Sjekk Prisen"} event={searchFunction}/>
    </View>
  )
}