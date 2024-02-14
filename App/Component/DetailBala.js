import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const DetailBala = () => {
  return (
    <View style={{flexDirection:'row', flex:1, gap:16}}>
    <View  style={{height:44, width:44, backgroundColor:'rgba(71, 159, 118, 0.4)',alignItems:'center', justifyContent:'center', borderRadius:50}} >
    <Ionicons name="arrow-up" size={24} color="#146C43" />
    </View>
    
    <View style={{flex:1}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Text style={{fontSize:16, fontWeight:'500', lineHeight:24}}>Balance In</Text>
    <Text style={{fontSize:16, fontWeight:'600', lineHeight:24}}>100,000,00</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Text style={{fontSize:12, fontWeight:'400', lineHeight:18}}>21 May 2023 10.00</Text>
    <Text style={{fontSize:12, fontWeight:'400', lineHeight:18}}>To Balance IDR</Text>
    </View>
    </View>
    </View>
  )
}

export default DetailBala

const styles = StyleSheet.create({})