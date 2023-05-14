import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/RestaurantDetails/About'

const Stack = createStackNavigator();

const RestaurantDetails = ({ route }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="About" component={About} route={route} />
        </Stack.Navigator>

    )
}

export default RestaurantDetails;
