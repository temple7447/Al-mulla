import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
import ActionMoney from '../Component/ActionMoney'
import Foreignex from '../Component/Foreignex'
import { Entypo } from '@expo/vector-icons';
import BottomSheet,{BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ChooseCur from '../Component/ChooseCur';
import BottomNav from '../Component/BottomNav';
import { useNavigation } from '@react-navigation/native';


export default function Home({}) {
const navigation = useNavigation()
    const bottomSheetRef = useRef(null);
    const [selectedId, setSelectedId] = useState();
    const snapPoints = useMemo(() => ['100%'], []);
    const [show, setShow] = useState(false)


    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, []);

      const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '',
            value: 'option1'
        }
    ]), []);


  return (
    <GestureHandlerRootView  style={{flex:1,}}>
    <ScrollView style={styles.container}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:30}}>
    <View>
    <Text style={{fontSize:24, fontWeight:'600', lineHeight:36, color:'#41464B'}}>Faqih Sopyan</Text>
    <Text>1102120034</Text>
    </View>
<Image source={require('../../assets/ProfilePicture.png')}  resizeMode='contain'  />
    </View>

    <View style={{marginTop:16, backgroundColor:'#198754', padding:16, borderRadius:15, height:120}}>
    <View style={{flexDirection:'row', gap:5}}>
<Text style={{color:'#FEFEFE', fontSize:14, lineHeight:21, fontWeight:'400'}}>Active Balance in THB</Text>
<Entypo name="chevron-down" size={24} color="#FFF" onPress={()=> setShow(true)} style={{paddingHorizontal:10, paddingVertical:2}} />
</View>
<TouchableOpacity onPress={()=> navigation.navigate("Balance")}>
<Text style={{color:'#FEFEFE', fontSize:40, lineHeight:60, fontWeight:'500'}}>100</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30, }}>
<ActionMoney text="Transfer" image={require('../../assets/convert.png')}  />
<ActionMoney text="Payment" image={require('../../assets/export.png')}  />
<ActionMoney text="Payout" image={require('../../assets/money-send.png')}  />
<ActionMoney text="Swap" image={require('../../assets/Swap.png')}  />
</View>



<View style={{flexDirection:'row', justifyContent:"space-between", marginTop:20}}>
<Text style={{fontSize:16, fontWeight:'600', lineHeight:27, color:'#141619'}}>Foreign Exhange</Text>
<TouchableOpacity onPress={()=> navigation.navigate("Foreign")}>
<Text style={{color:'#4C4DDC', fontSize:12, lineHeight:18, fontWeight:'500'}}>View All</Text>
</TouchableOpacity>
</View>

<View style={{marginTop:20}}>
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


    </ScrollView>
  {
    show && ( <View style={{flex:1,borderTopLeftRadius:20, borderTopRightRadius:20}}>
        <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
   
      
        >
        <View style={styles.contentContainer}>
          <Text>Choose Currency</Text>
          <BottomSheetScrollView>
          
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 1.png")}  cur="IDR" mean="Indonesian Rupiah"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 2.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 3.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 4.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 5.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 6.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 7.png")}  cur="USD" mean="US Dollar"/>
          <ChooseCur setShow={setShow} setSelectedId={setSelectedId} selectedId={selectedId} radioButtons={radioButtons}  image={require("../../assets/Rectangle 8.png")}  cur="USD" mean="US Dollar"/>
   
          </BottomSheetScrollView>
        </View>
        </BottomSheet>
        
        </View> )
  } 

 {!show &&  <BottomNav /> }
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:18
    },
    contentContainer: {
        flex: 1,
    paddingHorizontal:18, 
    paddingTop:18
    
      },
})