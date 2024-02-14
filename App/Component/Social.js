import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons ,  Ionicons , Feather  } from '@expo/vector-icons';

const Social = () => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:24}}>
    <MaterialCommunityIcons name="web" size={27} color="#198754" />
    <Ionicons name="notifications-outline" size={31} color="#198754" />
    <Feather name="navigation" size={28} color="#198754" />
    </View>
  )
}

export default Social

const styles = StyleSheet.create({})