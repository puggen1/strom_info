import { View, Text } from 'react-native'
import { Button } from 'react-native'
import useSendNotification from '../../hooks/useSendNotification'
const Settings = () => {  
  const {sendNotification} = useSendNotification()
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings