import { View, } from 'react-native'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import {actionBar as actionBarStyle} from '../../assets/style/actionBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faSearch, faGear } from '@fortawesome/free-solid-svg-icons'
import colors from '../../assets/style/colors'
import ActionBarButton from '../actionBarButton'
const ActionBar = ({}) => {
  const {currentPage, setCurrentPage, pages} = useContext(PageContext)
  const onPressFunction = (e, id)=>{
    setCurrentPage(pages[id])

  }
  return (
    <View style={[actionBarStyle,]}>
      <ActionBarButton onPressFunction={onPressFunction} id={0} icon={<FontAwesomeIcon color={currentPage.id === 0 ? colors.primary : colors.white} icon={faHouse} size={35}/>} currentWindow={currentPage}/>
      <ActionBarButton onPressFunction={onPressFunction} id={1} icon={<FontAwesomeIcon color={currentPage.id === 1 ? colors.primary : colors.white} icon={faSearch} size={35}/>} currentWindow={currentPage} main={true}/>
      <ActionBarButton onPressFunction={onPressFunction} id={2} icon={<FontAwesomeIcon color={currentPage.id === 2 ? colors.primary : colors.white} icon={faGear} size={35}/>} currentWindow={currentPage}/>
    </View>
  )
}

export default ActionBar