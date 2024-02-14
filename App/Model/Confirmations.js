import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";


const Confirmations = () => {
    const [isModalVisible, setModalVisible] = useState(false);


  return (
    <View>
    <Modal isVisible={false}>
    <View style={{  justifyContent:'center', backgroundColor:'#FFFFFF', width:336 , alignSelf:'center', paddingHorizontal:43, paddingVertical:23, borderRadius:10}}>
      <Text style={{textAlign:'center',fontWeight:'700', fontSize:24 }}>Insufficient Balance</Text>

      <Text style={{ fontSize:16, textAlign:'center', marginTop:12, marginBottom:24, fontWeight:'400', color:'#41464B'}}>Please top up your bank account balance or change your purchase nominal.</Text>

    </View>
    </Modal>
    
    </View>
  )
}



export default Confirmations

const styles = StyleSheet.create({})