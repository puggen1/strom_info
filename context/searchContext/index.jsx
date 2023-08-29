import { createContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { baseUrl } from '../../utils/constants'
const SearchContext = createContext()

const Search = ({children}) => {
  const [date, setDate] = useState(new Date());
  const [area, setArea] = useState()
  const [url, setUrl] = useState(baseUrl)
  const {data, error, loading} = useFetch(url)
    const searchFunction = () => {
      if(!area || !date){
        return
      }
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toLocaleString('no-NO', {minimumIntegerDigits: 2})
      const day = date.getDate().toLocaleString('no-NO', {minimumIntegerDigits: 2})
      const formattedDate = `${year}/${month}-${day}`
      const newUrl = `${baseUrl}${formattedDate}_${area}.json`
      console.log(newUrl)
      setUrl(newUrl)
    }
  return (
    <SearchContext.Provider value={{date, setDate, area, setArea, data, error, loading, searchFunction}}>
      {children}
    </SearchContext.Provider>
  )
}

export {SearchContext}
export default Search