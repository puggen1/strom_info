import { View, Text } from 'react-native'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/searchContext'
import useCalculateStatistic from '../../hooks/useCalculateStatistic'
import InfoBox from '../infoBox'
import { timePeriod } from '../../utils/timePeriod/timePeriod'
import numberFormater from '../../utils/numberFormater'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'
import DatePicker from '../datePicker'
import layout from '../../assets/style/layout'
import text from '../../assets/style/text'
import useHandleDatePicker from '../../hooks/useHandleDatePicker'
const ResultSection = () => {
    const {date, setDate, data, isLoading, isError, searchFunction} = useContext(SearchContext)
    const {highest,lowest,average} = useCalculateStatistic(data, isLoading)
    const {handleDate} = useHandleDatePicker()
    //quick reload when changing the date here
    useEffect(()=>{
      searchFunction()
    },[date])
  return (
    <View>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error...</Text>}
        {(data.length === 24 && (highest, lowest, average)) &&
        <>
        <View style={[layout.centered, {flexDirection:"row"}]}>
        <Text style={[text.subheader]}>Viser data for</Text>
        <DatePicker value={date} onChangeFunction={handleDate}/>
        </View>
        <View style={[{width:"65%", marginLeft:"auto", marginRight:"auto"}]}>
        <InfoBox header={"Høyeste"} subheader={numberFormater(highest.newPrice)} additionalText={timePeriod(highest.time_start, highest.time_end)} icon={<FontAwesomeIcon size={25} color={colors.danger}  icon={ faChevronUp } />}/>
        <InfoBox header={"Snitt"} subheader={average} />
        <InfoBox header={"Laveste"} subheader={numberFormater(lowest.newPrice)} additionalText={timePeriod(lowest.time_start, lowest.time_end)} icon={<FontAwesomeIcon size={25} color={colors.success}  icon={ faChevronDown } />}/>
        </View>
        </>
        }
    </View>
  )
}

export default ResultSection