import { Pressable } from 'react-native'
import Card from '../card'
/**
 * 
 * @description takes image, text and a function, creates a clickable card that runs a funciton on press/click
 * @returns 
 */
const ClickableCard = ({image, text, onClickFunction}) => {
  return (
    <Pressable onPress={onClickFunction}>
      <Card text={text} image={image}/>
    </Pressable>
  )
}

export default ClickableCard