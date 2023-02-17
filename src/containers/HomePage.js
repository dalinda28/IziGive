import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../components/Home/Main'

const Stack = createStackNavigator();

const HomePage = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>

    )
}

export default HomePage;
