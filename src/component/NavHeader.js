/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class NavHeader extends Component{
 render(){
     return (
        <View style={{
            height: h('12%'),
            width: w('100%'),
            backgroundColor:"#ada",
            flexDirection:'row',
        }}>
            {/* left */}
        <View style={{
               height: h('12%'),
               width: w('25%'),
               backgroundColor:"pink",
               alignItems:'center',
               justifyContent:'center',
        }}>
            <Icon name={'home'} size={30} color={'black'} />
        </View>

        {/* Mid */}
        <View style={{
               height: h('12%'),
               width: w('50%'),
               backgroundColor:"purple",
               alignItems:'center',
               justifyContent:'center',
        }}>
            <Text> Go</Text>
        </View>
        {/* Right */}
        <View style={{
               height: h('12%'),
               width: w('25%'),
               backgroundColor:"red",
               alignItems:'center',
               justifyContent:'center',
        }}>
             <Icon name={'add'} size={30} color={'black'} />
        </View>

        </View>
      
     )
 }
}