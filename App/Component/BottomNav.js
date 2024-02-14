import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomNav() {
  return (
    <View style={{position:'relative',}}>
    <View style={{position:'absolute', bottom:20, backgroundColor:'rgba(25, 135, 84, 1)', width:'90%', height:78, borderRadius:30, left:'5%'}}>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-evenly",paddingVertical:20 }}>
   <View style={{flexDirection:'row', alignItems:'center', gap:5, }}>
   <MaterialIcons name="account-balance-wallet" size={28} color="white" />
   <Text style={{color:'white'}}>Home</Text>
   </View>

   <Image source={require("../../assets/chart-2.png")}  resizeMode='contain' />
   <Image source={require("../../assets/chart-2.png")}  resizeMode='contain' />
   <Image source={require("../../assets/Setting.png")}  resizeMode='contain' />
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})