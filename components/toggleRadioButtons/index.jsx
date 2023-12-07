import { View } from 'react-native'
import ToggleRadioButton from '../toggleRadioButton'
import { useContext } from 'react'
import { NotificationContext } from '../../context/notificationContext'
const ToggleRadioButtons = ({buttons, changeButton, activeButton}) => {
  const {permissionStatus, setPermissionStatus, saveNotificationStatus} = useContext(NotificationContext)
  return (
    <View style={[{flexDirection:"row", flexWrap:"wrap"}]}>
      {buttons.map((button)=>{
        return <ToggleRadioButton key={button.id} text={button.text} type={button.id === activeButton ? "active": "default"} event={()=>{changeButton(button.id), button.function(), !permissionStatus && (setPermissionStatus(true), saveNotificationStatus(true))}}/>
      })}
    </View>
  )
}

export default ToggleRadioButtons