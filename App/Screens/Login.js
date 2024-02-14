import { StyleSheet, Text, View, Image , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import CustomBtn from '../Component/CustomBtn';
import Social from '../Component/Social';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
    <View>
    <FontAwesome6 name="arrow-left-long" size={24} style={{marginTop:32}} color="#10C26F" />

    <Image source={require('../../assets/Mask group.png')} resizeMode='contain' style={{marginTop:39, alignSelf:'center', height:100, width:95.1}} />
<Text style={{color:'#000000', fontWeight:'bold', fontSize:20, lineHeight:30, textAlign:'center', marginTop:30}}>Signup</Text>

<View style={{marginTop:95}}>
<Text style={{fontSize:14, color:'#000000', lineHeight:19, fontWeight:'500'}}>Civil ID</Text>

<View style={{ flexDirection:'row', height:49.14, alignItems:'center', borderWidth:1,borderColor:'#198754', marginTop:22,paddingHorizontal:19, backgroundColor:'#F8F7FB', borderRadius:15,}}>
<FontAwesome5 name="user" size={18} color="#10C26F"  style={{paddingRight: 11,}}/>
<TextInput placeholder='1038494985' placeholderTextColor='#151624' style={{flex:1}}   />
</View>

<View style={{marginTop:69}}>
<TouchableOpacity  onPress={() => { navigation.navigate("LoginS")}} style={{backgroundColor:'#10C26F', height:56, borderRadius:8, justifyContent:'center'}}>
<Text style={{textAlign:'center', color:'#FEFEFE', fontSize:16, lineHeight:24}}>send OTP</Text>
</TouchableOpacity>

</View>
</View>
</View>

<View>
<Social />
</View>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
     justifyContent:'space-between',
        paddingHorizontal:21,
       flex:1,
       paddingBottom:35

    }
})