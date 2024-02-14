import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Nav from '../Component/Nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import Confirmations from '../Model/Confirmations'
import InsufficientBalance from '../Model/InsufficientBalance'
import { useNavigation } from '@react-navigation/native'

const DetailPayment = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <Nav text="Detail Payment" />
            <View style={{flexDirection:'row',justifyContent:'center', marginTop:46}}>
                <Text style={{fontSize:40, lineHeight:60, fontWeight:'700'}}>Rp</Text>
                <Text style={{fontSize:40, lineHeight:60, fontWeight:'500'}}>43521</Text>
            </View>


            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:36}}>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>From</Text>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>Balance THB</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:16}}>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>To</Text>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>Balance IDR</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:16}}>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>Total in IDR</Text>
            <Text style={{color:'#141619', fontSize:18, lineHeight:27, fontWeight:"600"}}>฿ 100</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:16, paddingVertical:16, borderTopWidth: 2, borderBottomWidth:2}}>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>Fee Transaction</Text>
            <Text style={{fontSize:16, lineHeight:24, fontWeight:'400'}}>Rp 0</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:16}}>
            <Text style={{color:'#141619', fontSize:18, lineHeight:27, fontWeight:"600"}}>Total</Text>
            <Text style={{color:'#141619', fontSize:18, lineHeight:27, fontWeight:"600"}}>฿ 100</Text>
            </View>
          
        

            </View>
            <TouchableOpacity onPress={()=> {setModalVisible(true) ; navigation.navigate("SuccessTran")}} style={{backgroundColor:'#10C26F', height:56, borderRadius:10, justifyContent:'center'}}>
            <Text style={{textAlign:'center', color:'#FEFEFE', lineHeight:24, fontSize:16}}>Confirm</Text>
            </TouchableOpacity>


            
        </SafeAreaView>
    )
}

export default DetailPayment


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        flex: 1,
        justifyContent:'space-between',
        paddingBottom:12
    }

})