import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import layout from '../../assets/style/layout';


const DatePicker = ({value, onChangeFunction}) => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  if(today.getHours() <= 13){
    tomorrow.setDate(tomorrow.getDate() - 1)
  }
  return (
    <View style={layout.centered}>
      <DateTimePicker maximumDate={tomorrow} style={[{margin:0, padding:0},layout.centered]}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker