import { View, Text } from 'react-native'
import SearchSection from '../searchSection'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
const Main = () => {
    const {data} = useContext(SearchContext)
      return (
    <View>
      <SearchSection/>
    </View>
  )
}

export default Main