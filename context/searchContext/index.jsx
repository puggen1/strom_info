import { createContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { baseUrl } from '../../utils/constants'
import { router, useNavigation, } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
const SearchContext = createContext()

const Search = ({children}) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [area, setArea] = useState()
  const [url, setUrl] = useState()
  const {data, isError, isLoading, trigger, resetter} = useFetch(url)
    const searchFunction = async () => {
      if(!area || !date){
        return
      }
      else{
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toLocaleString('no-NO', {minimumIntegerDigits: 2})
      const day = date.getDate().toLocaleString('no-NO', {minimumIntegerDigits: 2})
      const formattedDate = `${year}/${month}-${day}`
      const newUrl = `${baseUrl}${formattedDate}_${area}.json`
      setUrl(newUrl)
      if(navigation.getCurrentRoute().name !== "result/index"){
      router.replace("/result")}
    }
    }


  // this should maybe be moved, im a little bit unsure yet....
  useEffect(()=>{
    loadAsyncStatus(setArea)
  },[])
  //to load preffered Area if it excist
  const loadAsyncStatus = async (setArea)=>{
    const status = await AsyncStorage.getItem("preferredArea");
    try{
    if(status !== null){
      setArea(status)
    }
  }
  catch(error){
    console.log(error)
  }


  }
  return (
    <SearchContext.Provider value={{date, setDate, area, setArea, data, isError, isLoading, searchFunction, resetter, setUrl, loadAsyncStatus}}>
      {children}
    </SearchContext.Provider>
  )
}

export {SearchContext}
export default Search