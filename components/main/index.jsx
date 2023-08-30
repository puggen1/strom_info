import { View, Text } from 'react-native'
import SearchSection from '../searchSection'
import ResultSection from '../resultSection'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
const Main = () => {
    const {data} = useContext(SearchContext)
      return (
    <View>
      {Object.keys(data).length === 0 ?
      <SearchSection/>
      :
      <ResultSection/>
      }
    </View>
  )
}

export default Main