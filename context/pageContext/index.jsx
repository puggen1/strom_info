import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {SearchContext} from "../searchContext";
import { useNavigation, router } from "expo-router";
const PageContext = createContext()

const PageController = ({children})=>{
    const {data, resetter, setUrl} = useContext(SearchContext)
    const navigation = useNavigation()
    const pages = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
    const [currentPage, setCurrentPage] = useState(pages[0])
    const changePage = (id, )=>{
        switch(id){
        case pages[0].id:
            setCurrentPage(pages[id])
            router.replace("/")
            break

        case pages[1].id:
            setCurrentPage(pages[id])
            if(navigation.getCurrentRoute().name === "result/index" || data.length === 0 ){
                
                // it is already here and should be reseted to the start of search
                setUrl()
                resetter()
                router.replace("/search")
            }
            //else it should go to the search result or last state of it...
            else{
            router.replace("/result")
            }
            break
        case pages[2].id:
            setCurrentPage(pages[id])
            router.replace("/settings")
            break
        }
    }
      return (
        <PageContext.Provider value={{pages, changePage, currentPage}}>
            {children}
        </PageContext.Provider>
    )
}

export {PageContext}
export default PageController