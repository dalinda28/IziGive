import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../components/Navigation/Navigation'

const Stack = createStackNavigator();

const NavigatePage = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Index" component={Index} />
        </Stack.Navigator>

    )
}

export default NavigatePage;
