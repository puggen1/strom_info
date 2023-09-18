import { createContext, useEffect, useState } from "react";
import { useNavigation, router } from "expo-router";
const PageContext = createContext()

const PageController = ({children})=>{
    const navigation = useNavigation()
    const pages = [{id:0, name:"home"}, {id:1, name:"search"}, {id:2, name:"settings"}];
    const [currentPage, setCurrentPage] = useState(pages[0])
    const changePage = ()=>{
        let realCurrPage = navigation.getCurrentRoute().name;
        console.log(currentPage, realCurrPage)
        /*if(currentPage.name === "settings" && realCurrPage !== "result/index"){
            router.replace("/settings")
        }
        if(currentPage.name === "search" && realCurrPage !== "search/index"){
            router.replace("/index")
        }
        if(currentPage.name === "home" && realCurrPage !== "/index"){
            router.replace("/home")
        }*/
      
    }
    useEffect(()=>{
        changePage()
    }, [currentPage])
    return (
        <PageContext.Provider value={{currentPage, setCurrentPage, pages}}>
            {children}
        </PageContext.Provider>
    )
}

export {PageContext}
export default PageController