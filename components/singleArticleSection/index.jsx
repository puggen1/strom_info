import { Image, View,Text, Dimensions  } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from '../../assets/style/colors'
import text from '../../assets/style/text'
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
      <View style={[{flexDirection:"row", alignContent:"center", alignItems:"center", gap:5, marginTop:15 }]}>
        <FontAwesomeIcon color={colors.primary} icon={`${data.icon.name}`} size={35}/>
        <Text style={[text.copy,{color:colors.primary}]}>{data.title}</Text>
      </View>
    )
  }
  else if(data._type === "image"){
    let width = Dimensions.get("window").width - 65
    return <View style={{width:"100%", marginVertical:15}}><Image style={{marginLeft:"auto", marginRight:"auto"}} source={{uri:data.imageUrl}}  width={width} /></View>

  }
}

export default SingleArticleSection

