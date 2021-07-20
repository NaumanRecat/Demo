/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screen/Dashboard';


const Stack = createStackNavigator();

export const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}