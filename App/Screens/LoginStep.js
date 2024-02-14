import { StyleSheet, Text, View, Image , TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import CustomBtn from '../Component/CustomBtn';
import Social from '../Component/Social';
import InsufficientBalance from '../Model/InsufficientBalance';



const LoginStep = () => {



  return (
    <SafeAreaView style={styles.container}>
    <View>
    <FontAwesome6 name="arrow-left-long" size={24} style={{marginTop:32}} color="#10C26F" />

    <Image source={require('../../assets/Mask group.png')} resizeMode='contain' style={{marginTop:39, alignSelf:'center', height:100, width:95.1}} />
<Text style={{color:'#000000', fontWeight:'bold', fontSize:20, lineHeight:30, textAlign:'center', marginTop:30, width:251, alignSelf:'center'}}> 04:58</Text>

<Text style={{textAlign:'justify', fontSize:15, width:296, fontWeight:'700', lineHeight:22.5, alignSelf:'center',marginTop:33}}>Please follow the steps below on your mobile ID app</Text>


<Text style={{paddingHorizontal:62, textAlign:'justify', fontSize:12 , marginTop:8, fontWeight:'500', color:'#000000', lineHeight:18}}>You will receive a push notification titled 'Mobile Civil ID App' on your mobile phone.
NOTE: If you have not received a notification, please go to the 'Authenticate' tab on your Mobile ID App. In this case, skip the next step.
Tap the notification. You will be redirected to Mobile ID App.</Text>

<Text style={{paddingHorizontal:62, textAlign:'justify', fontSize:12 , fontWeight:'500', color:'#000000', lineHeight:18}}>Tap the message request named 'Al Mulla Exchange'. The 'Authentication Request' page will be shown.</Text>

<Text  style={{paddingHorizontal:62, textAlign:'justify', fontSize:12 , fontWeight:'500', color:'#000000', lineHeight:18}}>Tap to Switch ON the 'I accept to share my details'.</Text>



<Text  style={{paddingHorizontal:62, textAlign:'justify', fontSize:12 , fontWeight:'500', color:'#000000', lineHeight:18}}>Tap the 'Authenticate' button. Enter your mobile ID PIN Code. Tap 'Confirm'.</Text>
<Text  style={{paddingHorizontal:62, textAlign:'justify', fontSize:12 ,}}>Return to Al Mulla Exchange App to continue registration.</Text>

</View>


    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
     justifyContent:'space-between',
        paddingHorizontal:21,
       flex:1,
       paddingBottom:35

    }
})

export default LoginStep




