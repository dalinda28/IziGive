import React from 'react'
import { Text, View } from 'react-native'
import { auth } from '../../Firebase/firebase'

const Main = () => {
    return (
        <View>
            <Text>Home Page </Text>
            <Text>Email: {auth.currentUser?.email}</Text>
        </View>

    )
}
export default Main