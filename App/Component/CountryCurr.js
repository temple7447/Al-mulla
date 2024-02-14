import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CountryCurr = ({image, cur, num}) => {
const navigation =  useNavigation()
  return (
    <Pressable onPress={()=> navigation.navigate("DetailBalanceIDR")} style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image source={image}  resizeMode='contain'  style={{alignSelf:'center', justifyContent:'center', alignItems:'center'}} />
    <View >
    <Text>{cur}</Text>
    <Text>{num}</Text>
    </View>
    </View>

    <Entypo name="chevron-right" size={24} color="black" />
    </Pressable>
  )
}

export default CountryCurr

const styles = StyleSheet.create({})