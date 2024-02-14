import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';


const ChooseCur = ({image, cur, mean,setSelectedId,selectedId, radioButtons, setShow }) => {
  return (
    <Pressable onPress={()=> setShow(false)} style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
     <Image  source={image} resizeMode='contain'  />
<Text>{cur} -  {mean}</Text>
</View>

<RadioGroup  
radioButtons={radioButtons} 
onPress={setSelectedId}
selectedId={selectedId}
/>

    </Pressable>
  )
}

export default ChooseCur

const styles = StyleSheet.create({})