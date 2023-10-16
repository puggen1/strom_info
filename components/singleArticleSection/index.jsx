import { Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from '../../assets/style/colors'
const SingleArticleSection = ({data}) => {
  //console.log(data.children ? data.children : data)
  if(data.children){
    if(data.children[0]._type == "span"){
      return <View>
        <Text>{data.children[0].text}</Text>
      </View>
    }
  }
  else if(data._type === "iconHeader"){
    return(
      <FontAwesomeIcon color={colors.primary} icon={`${data.icon.name}`} size={35}/>
    )
  }

}

export default SingleArticleSection

