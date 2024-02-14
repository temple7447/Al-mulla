import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from '../Component/Nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Foundation, Entypo , MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ForeignConverter = () => {
   const navigation=  useNavigation()
  return (
    <SafeAreaView style={styles.container}>
   <Nav  text="Foreign Converter" />

   <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#A7ACB1', height:56, borderRadius:10, padding:16, marginTop:30}}>
   <Text style={{color:'#FEFEFE', fontSize:14, lineHeight:21, fontWeight:'400'}}>Remaining purchase limit</Text>
   <View style={{flexDirection:'row', alignItems:'center', columnGap:8}}>
   <Text style={{color:'#FEFEFE', fontSize:14, lineHeight:21, fontWeight:'400'}} >100</Text>
   <Foundation name="info" size={24} color="#FEFEFE" />
   </View>
   </View>


   <View style={{height:298, backgroundColor:'#198754', marginTop:20, borderRadius:10, padding:16, justifyContent:'space-between'}}>
   <View>
   <Text style={{fontSize:14, fontWeight:'400', lineHeight:21, color:'#FEFEFE'}}>From</Text>
   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
<View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
<Text style={{fontWeight:'600', fontSize:16, lineHeight:24, color:'#FEFEFE'}}>THB</Text>
<Entypo name="chevron-thin-down" size={24} color="#FEFEFE" />
</View>
<Text style={{fontSize:24, lineHeight:36, fontWeight:'600', color:'#FEFEFE'}}>0</Text>

</View>

<MaterialCommunityIcons style={{alignSelf:'center'}} name="swap-vertical-circle" size={40} color="white" />

   <Text style={{fontSize:14, fontWeight:'400', lineHeight:21, color:'#FEFEFE'}}>To</Text>
   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
   <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
   <Text style={{fontWeight:'600', fontSize:16, lineHeight:24, color:'#FEFEFE'}}>IDR</Text>
   <Entypo name="chevron-thin-down" size={24} color="#FEFEFE" />
   </View>
   <Text style={{fontSize:24, lineHeight:36, fontWeight:'600', color:'#FEFEFE'}}>0</Text>
   </View>


   </View>
   <Pressable onPress={()=> navigation.navigate("DetailPayment")} style={{backgroundColor:'#10C26F', height:56, borderRadius:8,justifyContent:"center" }}>
   <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:16, fontWeight:'400', lineHeight:24 }}>Continue</Text>
   
   </Pressable>

   </View>
    </SafeAreaView>
  )
}

export default ForeignConverter

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        flex:1
    }
})