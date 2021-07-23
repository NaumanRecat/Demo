/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screen/Dashboard';
import {NavHeader} from '../component/NavHeader';


const Stack = createStackNavigator();

export const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
            <Stack.Screen name="NavHeader" component={NavHeader} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}