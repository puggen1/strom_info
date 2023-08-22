import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePicker = ({value, onChangeFunction}) => {
  const maximumDate = new Date()
  maximumDate.setDate(maximumDate.getDate() + 1)


  return (
    <View>
      <DateTimePicker maximumDate={maximumDate}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker