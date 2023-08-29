import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import layout from '../../assets/style/layout';


const DatePicker = ({value, onChangeFunction}) => {
  return (
    <View style={layout.centered}>
      <DateTimePicker style={[{margin:0, padding:0},layout.centered]}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker