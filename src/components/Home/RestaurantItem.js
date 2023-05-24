import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./Styles";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const RestaurantItem = ({ restaurantData, navigation }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.push("CartScreen", {
                            restaurant,
                        });
                    }}
                >
                    <View style={styles.RestaurantItem}>
                        <View style={styles.RestaurantItemContainer}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantInfo
                                name={restaurant.name}
                                rating={restaurant.rating}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const RestaurantImage = ({ image }) => (
    <Image
        source={{
            uri: image,
        }}
        style={styles.RestaurantImage}
    />
);

const RestaurantInfo = (props) => (
    <View style={styles.RestaurantInfoContainer}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray", marginTop: 10 }}>
                30-45 • min
            </Text>
        </View>

        <TouchableOpacity style={{ bottom: 10 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#000" />
        </TouchableOpacity>
    </View>
);

export default RestaurantItem;
