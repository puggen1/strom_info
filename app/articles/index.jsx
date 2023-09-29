import { View, Text , Button} from 'react-native'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import { router } from 'expo-router'
const Articles = () => {
    const {articleId} = useContext(PageContext)
  return (
    <View>
      <Text>{articleId}</Text>
      <Button title='back' onPress={()=>{router.back()}}/>
    </View>
  )
}

export default Articles