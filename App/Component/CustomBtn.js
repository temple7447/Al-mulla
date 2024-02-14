import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomBtn = ({text,setModalVisible, to}) => {
 const navigation = useNavigation()
  return (
    <TouchableOpacity  onPress={() => {setModalVisible((prev) => !prev); navigation.navigate(to)}} style={{backgroundColor:'#10C26F', height:56, borderRadius:8, justifyContent:'center'}}>
      <Text style={{textAlign:'center', color:'#FEFEFE', fontSize:16, lineHeight:24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({})