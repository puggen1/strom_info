import { View } from 'react-native'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import ClickableCard from "../clickableCard/index"
import {homeContent} from "../../assets/style/homeContent"
import { useRouter } from 'expo-router'
const ArticleSection = () => {
  const {setOpenArticle, setArticleId} = useContext(PageContext)
  const router = useRouter()
  const navigateToArticle = (articleId)=>{
    setOpenArticle(true)
    setArticleId(articleId)
    router.push(`/articles`)
  }
  return (
    <View style={[homeContent]}>
       <ClickableCard onClickFunction={()=>{navigateToArticle(1)}} text={"Hvordan bruke appen"} image={"https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80"}/>
        <ClickableCard onClickFunction={()=>{navigateToArticle(2)}} text={"Hva er nytt - ver 1.2.1"} image={"https://images.unsplash.com/photo-1560416313-414b33c856a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"}/>
        <ClickableCard onClickFunction={()=>{navigateToArticle(3)}} text={"Strøm nyheter"} image={"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"}/>
    </View>
  )
}

export default ArticleSection