import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from '../Component/Nav'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import CountryCurr from '../Component/CountryCurr';

const Balance = () => {
  return (
    <SafeAreaView style={styles.container}>
<Nav  text="Saldo"/>

<View style={{marginTop:16, backgroundColor:'#198754', padding:16, borderRadius:15, height:120}}>
<Text style={{color:'#FEFEFE', fontSize:14, lineHeight:21, fontWeight:'400'}}>Active Balance in THB</Text>
<Text style={{color:'#FEFEFE', fontSize:40, lineHeight:60, fontWeight:'500'}}>100</Text>


</View>

<Text style={{fontSize:18, lineHeight:27, fontWeight:'500', color:'#141619', marginVertical:20}}>Your Currencies</Text>

<View>
<CountryCurr  image={require("../../assets/IDR.png")}  cur="IDR" num="100,000,000"/>
<CountryCurr  image={require("../../assets/USD.png")}  cur="USD" num="0"/>
<CountryCurr  image={require("../../assets/JYP.png")}  cur="JYP" num="0"/>
<CountryCurr  image={require("../../assets/SGD.png")}  cur="SGD" num="0"/>
<CountryCurr  image={require("../../assets/THB.png")}  cur="THB" num="100"/>
<CountryCurr  image={require("../../assets/AUS.png")}  cur="AUS" num="0"/>
<CountryCurr  image={require("../../assets/EUR.png")}  cur="EUR" num="0"/>
<CountryCurr  image={require("../../assets/GBP.png")}  cur="GBP" num="0"/>
<CountryCurr  image={require("../../assets/CAD.png")}  cur="CAD" num="0"/>

</View>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        flex:1
    }
})
export default Balance

