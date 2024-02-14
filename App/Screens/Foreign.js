import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from '../Component/Nav'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Foreignex from '../Component/Foreignex';

const Foreign = () => {
  return (
    <SafeAreaView style={styles.container}>
<Nav  text="Foreign Exhange"/>




<View style={{marginTop:30}}>
<Foreignex  image={require("../../assets/AED.png")}  cur="AED" num="4,067"/>
<Foreignex  image={require("../../assets/AUS.png")}  cur="AUS" num="9,927"/>
<Foreignex  image={require("../../assets/CAD.png")}  cur="CAD" num="11,066"/>
<Foreignex  image={require("../../assets/EUR.png")}  cur="EUR" num="16,157"/>
<Foreignex  image={require("../../assets/GBP.png")}  cur="GBP" num="18,590"/>
<Foreignex  image={require("../../assets/HKD.png")}  cur="HKD" num="1,910"/>
<Foreignex  image={require("../../assets/JYP.png")}  cur="JYP" num="108"/>
<Foreignex  image={require("../../assets/KWD.png")}  cur="KWD" num="48,790"/>
<Foreignex  image={require("../../assets/SGD.png")}  cur="SGD" num="10,050"/>
<Foreignex  image={require("../../assets/THB.png")}  cur="THB" num="435"/>
<Foreignex  image={require("../../assets/USD.png")}  cur="USD" num="14,945"/>

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




export default Foreign

