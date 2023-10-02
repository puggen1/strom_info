import { View, Text , Button} from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context/pageContext'
import { router } from 'expo-router'
import useGetData from '../../hooks/useGetData'
import text from '../../assets/style/text'
import { Image } from 'react-native'

const Articles = () => {
  //this is easier to do now with the already excisting system
    const {articleId} = useContext(PageContext)
  console.log(articleId)
    const {getSingleDocument} = useGetData("articles")
  const [article, setArticle] = useState({})
    useEffect(()=>{
      (async()=>{
        let result = await getSingleDocument(articleId)
        console.log(result)
        if(result.title){
          setArticle(result)
        }
      })()
    },[])
  return ( 
    <View>
        { Object.keys(article).length > 0 &&
        <>
      <Text style={[text.header]}>{article.title}</Text>
      <Image source={{uri:article.image}} style={{width:"95%", height:200, marginLeft:"auto", marginRight:"auto", borderRadius:20, opacity:0.9}}/>
      <Button title='back' onPress={()=>{router.back()}}/>
      </>
    }
    </View>
 
  )
}

export default Articles