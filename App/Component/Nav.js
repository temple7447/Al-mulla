import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign,MaterialCommunityIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nav = ({text}) => {
   const navigation =  useNavigation()
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
    <AntDesign onPress={()=> navigation.goBack() } name="left" size={24} color="black" />
<Text style={{color:'#141619', fontSize:18, lineHeight:27, fontWeight:'600'}}>{text}</Text>
    <MaterialCommunityIcons name="dots-vertical" size={24} color="#D9D9D9" />
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({})