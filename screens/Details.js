import React from 'react'
import {Text,View,SafeAreaView,Image, StatusBar,FlatList} from 'react-native';
import {COLORS,SIZES,SHADOWS,FONTS,assets} from '../constants'
import {CircleButton,RecButton,SubInfo,FocusedStatusBar,DetailsDesc,DetailsBid} from '../components'

const Details = ({route,navigation}) => {

  const{data} = route.params;


  return (

   <SafeAreaView style={{flex:1}}> 
     <FocusedStatusBar barStyle="dark-content"
     backgroundColor="transparent"
     transLucent={true}/>

      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.6)',
        zIndex:1,
      }}>
        <RecButton  minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>

   </SafeAreaView>
  )
}

export default Details
