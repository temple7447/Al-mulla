import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ActionMoney = ({ image, text }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.shadowContainer}>
        <Image source={image} resizeMode='contain'  />
      </View>
      <Text style={{ marginTop: 20, fontSize:14, fontWeight:'400', lineHeight:21 }}>{text}</Text>
    </View>
  )
}

export default ActionMoney

const styles = StyleSheet.create({
  shadowContainer: {
    elevation: 5,  // Android shadow
    shadowColor: '#000',  // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
})
