import { Image, View,Text  } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from '../../assets/style/colors'
import text from '../../assets/style/text'
import layout from '../../assets/style/layout'
const SingleArticleSection = ({data}) => {
  if(data.children){
    if(data.style == "h4"){
      return <View>
      <Text style={[text.subheader]}>{data.children[0].text}</Text>
    </View>    }
    else if(data.children[0]._type == "span"){
      return <View>
        <Text style={[text.copy,]}>{data.children[0].text}</Text>
      </View>
    }
  }
  else if(data._type === "iconHeader"){
    
    return(
      <View style={[{flexDirection:"row", alignContent:"center", alignItems:"center", gap:5}]}>
        <FontAwesomeIcon color={colors.primary} icon={`${data.icon.name}`} size={35}/>
        <Text style={[text.copy]}>{data.title}</Text>
      </View>
    )
  }
  else if(data._type === "image"){

    return <Image source={{uri:data.imageUrl}}  style={{width:"100%", objectFit:"scale-down"}}/>

  }
}

export default SingleArticleSection

