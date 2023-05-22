import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from "./Styles";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"
import About from '../RestaurantDetails/About';

export const localRestaurant = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
]
export default function RestaurantItem({ ...props }) {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false} >
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('about', {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.review_count,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                        })
                    }}>
                    < View style={styles.RestaurantItem} >
                        <View style={styles.RestaurantItemContainer} >
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                        </View>
                    </View >
                </TouchableOpacity >
            ))}
        </ScrollView >
    )
}


const RestaurantImage = (props) => (
    <Image
        source={{
            uri: props.image,
        }}
        style={styles.RestaurantImage}
    />
);

const RestaurantInfo = (props) => (
    <View
        style={styles.RestaurantInfoContainer}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray", marginTop: 10 }}>30-45 • min</Text>
        </View>

        <TouchableOpacity style={{ bottom: 10 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#000" />
        </TouchableOpacity>

    </View>
);
