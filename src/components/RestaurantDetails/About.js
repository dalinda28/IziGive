import { View, Text, Image, TouchableOpacity } from "react-native";
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const About = ({ restaurant, onBackPress }) => {
    const { image, name, description } = restaurant;

    return (
        <View>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.RestaurantItem} >
                <View style={styles.RestaurantItemContainer} >
                    <Image style={styles.RestaurantImage} source={{ uri: restaurant.imageUrl }} />
                    <View
                        style={styles.RestaurantInfoContainer}>
                        <View>
                            <Text style={{
                                fontWeight: "bold", fontSize: 29,
                                fontWeight: "600",
                                marginTop: 10,
                                marginHorizontal: 15,
                            }}>{name}</Text>
                            <Text style={{ fontSize: 13, color: "gray", marginTop: 10 }}>30-45 • min</Text>
                        </View>
                        <Text style={{
                            marginTop: 10,
                            marginHorizontal: 15,
                            fontWeight: "400",
                            fontSize: 15.5,
                        }}>{restaurant.description}</Text>
                        <TouchableOpacity style={{ bottom: 10 }}>
                            <MaterialCommunityIcons name="heart-outline" size={25} color="#000" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View >

            <Text style={styles.title}>{restaurant.title}</Text>

        </View>
    )
}

const styles = {
    backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        zIndex: 2,
    },

    RestaurantItem: {
        flexDirection: "row",
        margin: 20,
    },

    RestaurantItemContainer: {
        width: 200,
        height: 280,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        backgroundColor: "white"
    },

    RestaurantInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    RestaurantImage: {
        width: "100%",
        height: "100%",
    }
};

export default About;
