import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from '../Component/Nav'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import DetailBala from '../Component/DetailBala';
import { useNavigation } from '@react-navigation/native';

const DetailBalanceIDR = () => {
  const navigation =  useNavigation()
  return (
    <SafeAreaView style={styles.container}>
<Nav  text="Balance IDR"/>

<View style={{marginTop:16, backgroundColor:'#198754', padding:16, borderRadius:15}}>
<Text style={{color:'#FEFEFE', fontSize:14, lineHeight:21, fontWeight:'400'}}>Total Balance</Text>
<Text style={{color:'#FEFEFE', fontSize:40, lineHeight:60, fontWeight:'500'}}>₹12, 101.67</Text>

<Pressable onPress={()=> navigation.navigate("ForeignConverter")} style={{flexDirection:'row', gap:10, justifyContent:'flex-end'}}>
<Text style={{fontSize:14, fontWeight:'400', lineHeight:21,color:'#FEFEFE'}}>Swap</Text>
<MaterialCommunityIcons name="arrow-right-bold-box-outline" size={24} color="#FEFEFE" />
</Pressable>
</View>

<Text style={{fontSize:18, lineHeight:27, fontWeight:'500', color:'#141619', marginVertical:20}}>List Transaction</Text>

<View style={{flexDirection:'row',gap:16,}}>
<DetailBala />
</View>

    </SafeAreaView>
  )
}

export default DetailBalanceIDR

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        flex:1
    }
})