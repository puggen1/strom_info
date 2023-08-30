import { View, Text } from 'react-native'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import useCalculateStatistic from '../../hooks/useCalculateStatistic'
import InfoBox from '../infoBox'
import { timePeriod } from '../../utils/timePeriod/timePeriod'
const ResultSection = () => {
    const {data, isLoading, isError} = useContext(SearchContext)
    const {highest,lowest,average} = useCalculateStatistic(data, isLoading)
  return (
    <View>
        <Text>ResultSection</Text>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error...</Text>}
        {(data.length === 24 && (highest, lowest, average)) && 
        <>
        <InfoBox header={"Høyeste"} subheader={highest.NOK_per_kWh} additionalText={timePeriod(highest.time_start, highest.time_end)}/>
        <InfoBox header={"Snitt"} subheader={average} />
        <InfoBox header={"Laveste"} subheader={lowest.NOK_per_kWh} additionalText={timePeriod(lowest.time_start, lowest.time_end)}/>
        </>
        }
    </View>
  )
}

export default ResultSection