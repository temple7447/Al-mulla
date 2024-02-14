import { StyleSheet, Text, View, Image , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

import Social from '../Component/Social';
import { useNavigation } from '@react-navigation/native';


const LoginS = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
    <View>
    <FontAwesome6 onPress={()=> navigation.goBack()} name="arrow-left-long" size={24} style={{marginTop:32}} color="#10C26F" />

    <Image source={require('../../assets/Mask group.png')} resizeMode='contain' style={{marginTop:39, alignSelf:'center', height:100, width:95.1}} />
<Text style={{color:'#000000', fontWeight:'bold', fontSize:20, lineHeight:30, textAlign:'center', marginTop:30, width:251, alignSelf:'center'}}>Welcome to Al Mulla Exchange.</Text>

<View style={{marginTop:82}}>
<Text style={{fontSize:12, color:'#000000', lineHeight:18, fontWeight:'400', width:277, textAlign:'center', alignSelf:'center'}}> We are happy to help you register with us. Please follow the instruction on the screen or take assistance from our Agent to help you complete the registration
Let's Start
</Text>



<View style={{marginTop:69}}>
<TouchableOpacity  onPress={() => {navigation.navigate("Home")}} style={{backgroundColor:'#10C26F', height:56, borderRadius:8, justifyContent:'center'}}>
<Text style={{textAlign:'center', color:'#FEFEFE', fontSize:16, lineHeight:24}}>Next Steps</Text>
</TouchableOpacity>
</View>
<View style={{marginTop:69}}>
<Text style={{textAlign:'center'}}>For any assistance kindly WhatsApp/ Call us on</Text>
<View style={{flexDirection:'row',gap:8, alignSelf:'center'}}>
<Text style={{color:'#10C26F'}}>1840123</Text>
<Text>Help?</Text>
</View>

</View>
</View>
</View>

<View>
<Social />
</View>

    </SafeAreaView>
  )
}

export default LoginS

const styles = StyleSheet.create({
    container:{
     justifyContent:'space-between',
        paddingHorizontal:21,
       flex:1,
       paddingBottom:35

    }
})