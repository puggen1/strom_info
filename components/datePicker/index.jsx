import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import layout from '../../assets/style/layout';


const DatePicker = ({value, onChangeFunction}) => {
  const maximumDate = new Date()
  maximumDate.setDate(maximumDate.getDate() + 1)


  return (
    <View style={layout.centered}>
      <DateTimePicker style={layout.centered}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker