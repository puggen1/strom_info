import { View } from 'react-native'
import React from 'react'
import DropdownSelect from 'react-native-input-select'
import { areaSelect as areaselectStyling } from '../../assets/style/areaSelect'
import text from '../../assets/style/text'
const AreaSelect = ({ value, setValue}) => {
  return (
    <View style={areaselectStyling.outerSelect}>
        <DropdownSelect label='velg område'
        placeholder='Område'
        options={[{label:"øst", value:"NO1" }, {label:"Sør", value:"NO2" },{label:"Midt", value:"NO3" },{label:"Nord", value:"NO4" },{label:"vest", value:"NO5" }]}
        selectedValue={value}
        onValueChange={(value)=>{setValue(value)}}
        dropdownStyle={areaselectStyling.dropdown}
        labelStyle={[text.copy, areaselectStyling.label]}
        placeholderStyle={[text.subheader, areaselectStyling.placeholder]}
        dropdownIconStyle={areaselectStyling.icon}
        selectedItemStyle={[text.subheader, areaselectStyling.placeholder]}
        checkboxComponentStyles={areaselectStyling.checkBox}
/>
    </View>
  )
}

export default AreaSelect