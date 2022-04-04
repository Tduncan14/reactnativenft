import {View, Text,FlatList} from 'react-native';
import React from 'react';
import {COLORS,SIZES,SHADOWS,assets} from '../constants';


export const SubInfo = () => {




    return (
        <View style={{
            width:'100%',
            paddingHorizontal:SIZES.font,
            marginTop:-SIZES.extraLarge,
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
            <People/>
            <EndDate />
        </View>
    )
}

export const EthPrice = () => {
    
    return(
        <View>
            <Text>EthPrice</Text>
        </View>
    )
}


export const ImageCmp = () => {

    
    return(
        <View>
          <Text>ImageCp</Text>
        </View>
    )
}

export const People = () => {
     
    return(
        <View style={{flexDirection:'row'}}>
            {[assets.person02,assets.person03, assets.person04].map((imgUrl,index) =>(
             <ImageCmp key={index}/>
            ))}
        </View>
    )
}

export const NFTTitle = () => {


    return(
        <View style={{flexDirection:"row"}}>
            <Text></Text>
        </View>
    )
}


export const EndDate = () => {


    return(
        <View>
            <Text>Enddate</Text>
        </View>
    )
}





