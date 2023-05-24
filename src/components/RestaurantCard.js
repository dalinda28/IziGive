import { Dimensions, StyleSheet, Text, Image, View } from "react-native";
import React, { FC } from "react";
// import { FoodModel, Restaurant } from "../redux/Models/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
// interface RestaurantProps {
//   item: Restaurant | FoodModel;
//   onTap: Function;
// }
const ScreenWidth = Dimensions.get("screen").width;
const RestaurantCard = ({ item, onTap }) => {
  return (
    <TouchableOpacity onPress={() => onTap(item)} style={styles.container}>
      <Image
        source={{ uri: `${item.image_url}` }}
        // source={item.image_url}
      />
      <View>
        <Entypo name="heart" color="#ea211a" size={25} />
      </View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    backgroundColor: "red",
    width: 175,
    height: 175,
    margin: 5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 20,
    shadowRadius: 10,

    elevation: 1,
  },
});

export default RestaurantCard;
