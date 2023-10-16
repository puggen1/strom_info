import { View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context/pageContext'
import ClickableCard from "../clickableCard/index"
import {homeContent} from "../../assets/style/homeContent"
import { useRouter } from 'expo-router'
import useGetData from '../../hooks/useGetData'
import { client } from '../../sanity'

const ArticleSection = () => {
  const {setOpenArticle, setArticleId} = useContext(PageContext)
  const [articles, setArticles] = useState([])
  const router = useRouter()
  const navigateToArticle = (articleId)=>{
    setOpenArticle(true)
    setArticleId(articleId)
    router.push(`/articles`)
  }
  const {getAllDocuments} = useGetData()

  useEffect( ()=>{
    (async()=>{
      const allArticles = await getAllDocuments()
      console.log(allArticles)
    setArticles(allArticles)
    })()
  },[])
 /* useEffect(()=>{
    
  },[articles])*/
  return (
    <View style={[homeContent]}>
     {articles.length > 0 &&
     articles.map((article, index)=>{
      return <ClickableCard key={index} image={article.mainImage} text={article.title} onClickFunction={()=>{navigateToArticle(article.id)}}/>
     })
     }
    </View>
  )
}

export default ArticleSection