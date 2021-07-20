/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Text, View} from 'react-native';

export class Dashboard extends Component {
    render(){
        return (
            <View style={{
                height:100,
                width:100,
                backgroundColor:'green',
            }}>
                <Text>
                    Nomi is a good developer
                </Text>
            </View>
        )
    }
}

