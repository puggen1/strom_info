import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {SearchContext} from "../searchContext";
import { useNavigation, router } from "expo-router";
const PageContext = createContext()

const PageController = ({children})=>{
    const {data, resetter, setUrl} = useContext(SearchContext)
    const navigation = useNavigation()
    const pages = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
    //current page
    const [currentPage, setCurrentPage] = useState(pages[0])
    //if inside article
    const [openArticle, setOpenArticle]= useState(false)
    //articleId
    const [articleId, setArticleId]= useState()
    const changePage = (id, )=>{
        switch(id){
        case pages[0].id:
            setCurrentPage(pages[id])
            if(navigation.getCurrentRoute().name === "articles/index"){
                setOpenArticle(false)
                router.push("/")
            }
            else if(openArticle){
                    router.push("/articles")
            }else{
                router.push("/")
            }
            break

        case pages[1].id:
            setCurrentPage(pages[id])
            if(navigation.getCurrentRoute().name === "result/index" || data.length === 0 ){
                
                // it is already here and should be reseted to the start of search
                setUrl()
                resetter()
                router.push("/search")
            }
            //else it should go to the search result or last state of it...
            else{
            router.push("/result")
            }
            break
        case pages[2].id:
            setCurrentPage(pages[id])
            router.push("/settings")
            break
        }
    }
      return (
        <PageContext.Provider value={{pages, changePage, currentPage, setOpenArticle, setArticleId, articleId}}>
            {children}
        </PageContext.Provider>
    )
}

export {PageContext}
export default PageController