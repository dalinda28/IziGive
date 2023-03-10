import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from '../components/Navigation/Navigation'

const Stack = createStackNavigator();

const NavigatePage = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>

    )
}

export default NavigatePage;
