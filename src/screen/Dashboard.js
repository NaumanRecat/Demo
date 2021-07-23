/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavHeader} from '../component/NavHeader';

export class Dashboard extends Component {
    render(){
        return (
            <View style={{
                flex:1,
                backgroundColor:'grey',
            }}>

              <NavHeader/>
               <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: 'orange',
              borderColor: 'pink',
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:w('10%'),
            }}>
            <Image
              source={require('../assests/D.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />
            <Text>Go to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: 'orange',
              borderColor: 'pink',
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:w('10%'),
            }}>
            <Image
              source={require('../assests/D.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />
            <Text>Go to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: 'orange',
              borderColor: 'pink',
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:w('10%'),
            }}>
            <Image
              source={require('../assests/D.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />
            <Text>Go to Cart</Text>
          </TouchableOpacity>

               
            </View>
        );
    }
}

