import { View, Text } from 'react-native'
import React from 'react'
import DropdownSelect from 'react-native-input-select'
import { areaSelect as areaselectStyling } from '../../assets/style/areaSelect'
import text from '../../assets/style/text'
import areas from '../../utils/areas'
import colors from '../../assets/style/colors'
const AreaSelect = ({ value, setValue, settingsPage, preferredFunction}) => {
  
  return (

    <View style={settingsPage ? areaselectStyling.outerSelectSettings : areaselectStyling.outerSelect}>
        <DropdownSelect label={ settingsPage ? 'Ditt standard område:' : 'Velg Område'}
        placeholder='Område'
        options={areas}
        selectedValue={value}
        onValueChange={(value)=>{setValue(value),preferredFunction && preferredFunction(value)}}
        dropdownStyle={areaselectStyling.dropdown}
        labelStyle={[text.copy, settingsPage ? areaselectStyling.labelSettings:areaselectStyling.label]}
        placeholderStyle={[text.subheader, areaselectStyling.placeholder]}
        dropdownIconStyle={areaselectStyling.icon}
        selectedItemStyle={[text.subheader, areaselectStyling.placeholder]}
        checkboxComponentStyles={areaselectStyling.checkBox}
        checkboxComponent={<View style={areaselectStyling.checkBoxStyle}/>}
/>
    </View>
  )
}

export default AreaSelect