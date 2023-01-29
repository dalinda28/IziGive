import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../components/Home/Main'

const Stack = createStackNavigator();

const HomePage = () => {
    return (
        <Text>Home Page</Text>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    }
})

export default HomePage;