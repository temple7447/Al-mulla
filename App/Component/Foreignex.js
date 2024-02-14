import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Foreignex = ({image, cur, num}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image source={image}  resizeMode='contain'  style={{}} />
    <Text>{cur}</Text>

    </View>

    <Text>{num}</Text>
    </View>
  )
}


export default Foreignex

const styles = StyleSheet.create({})