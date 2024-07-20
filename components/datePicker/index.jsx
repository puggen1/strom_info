import { View, Platform, Text } from 'react-native';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import AndroidDateButton from '../androidDateButton';
import layout from '../../assets/style/layout';
import text from '../../assets/style/text';
import { areaSelect } from '../../assets/style/areaSelect';
const DatePicker = ({value, onChangeFunction, searchPage, resultPage}) => {
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
       {!resultPage && <Text style={[text.copy, areaSelect.label]}>Velg Dato</Text>}
      <AndroidDateButton searchPage={searchPage} date={day + "." + month +"." +year} event={()=>{DateTimePickerAndroid.open({maximumDate:tomorrow, mode:"date", display:"calendar", value:value, onChange:onChangeFunction})}} />
    </View>)
    }
      return (
    <View style={layout.centered}>
      {!resultPage && <Text style={[text.copy, areaSelect.label]}>Velg Dato</Text>}
      <DateTimePicker maximumDate={tomorrow} style={[{margin:0, padding:0},layout.centered]}  value={value} mode='date' display='calendar' onChange={onChangeFunction}/>
    </View>
  )
}

export default DatePicker