import { View, Platform } from 'react-native';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import AndroidDateButton from '../androidDateButton';
import layout from '../../assets/style/layout';
const DatePicker = ({value, onChangeFunction, searchPage}) => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  if(today.getHours() <= 13){
    tomorrow.setDate(tomorrow.getDate() - 1)
  }
  // this is an fix for buggy android
  if(Platform.OS === "android"){
    const year = value.getFullYear()
    const month = (value.getMonth() + 1).toLocaleString('no-NO', {minimumIntegerDigits: 2})
    const day = value.getDate().toLocaleString('no-NO', {minimumIntegerDigits: 2})
   return(<View>
      <AndroidDateButton searchPage={searchPage} date={day + "." + month +"." +year} event={()=>{DateTimePickerAndroid.open({maximumDate:tomorrow, mode:"date", display:"calendar", value:value, onChange:onChangeFunction})}} />
    </View>)
    }
      return (
    <View style={layout.centered}>
      <DateTimePicker maximumDate={tomorrow} style={[{margin:0, padding:0},layout.centered]}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker