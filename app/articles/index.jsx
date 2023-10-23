import { View, Text , Button} from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context/pageContext'
import { router } from 'expo-router'
import text from '../../assets/style/text'
import { Image } from 'react-native'
import useGetData from '../../hooks/useGetData'
import SingleArticleSection from '../../components/singleArticleSection'
import articleSection from '../../assets/style/articleSection'
const Articles = () => {
  //this is easier to do now with the already excisting system
    const {articleId} = useContext(PageContext)
    const {getSingleDocument} = useGetData()

    const [article, setArticle] = useState({})
    useEffect(()=>{
      (async()=>{
        let result = await  getSingleDocument(articleId)
        if(result[0].title){
          setArticle(result[0])
        }
      })()
    },[])
  return ( 
    <View>
        { Object.keys(article).length > 0 &&
        <>
      <Text style={[text.header, {marginBottom:10}]}>{article.title}</Text>
      <Image source={{uri:article.mainImage}} style={{width:"95%", height:200, marginLeft:"auto", marginRight:"auto", borderRadius:20, opacity:0.9, marginBottom:15}}/>
      {article.ingress[0].children.map((children, index)=>{
        return <Text style={[text.copy,{textAlign:"center", marginLeft:20, marginRight:20}]} key={index}>{children.text}</Text>
      })}
      <View style={[articleSection]}>
      {article.sectionOne.map((section)=>{
        return <SingleArticleSection data={section} key={section._key}/>
      })}
      </View>
      <View style={[articleSection]}>
       {article.sectionTwo.map((section)=>{
        return <SingleArticleSection data={section} key={section._key}/>
      })}
      </View>
      <Button title='back' onPress={()=>{router.back()}}/>
      </>
    }
    </View>
 
  )
}

export default Articles