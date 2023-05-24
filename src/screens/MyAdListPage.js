import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import CustomSwitch from "../components/CustomSwitch";
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
];
const MyAdListPage = () => {
  const [adTab, setAdTab] = React.useState(1);
  const onSelectSwitch = (value) => {
    setAdTab(value);
  };

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.TextHeader}>Mes annonces</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <CustomSwitch
          selectionMode={1}
          option1="En ligne"
          option2="Passées"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      {adTab == 1 && (
        <ScrollView showsVerticalScrollIndicator={false} style={Styles.body}>
          {localRestaurant.map((restaurant, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {}}
              style={Styles.card}
            >
              <View style={Styles.RestaurantItem}>
                <View style={Styles.RestaurantItemContainer}>
                  <Image
                    source={{
                      uri: restaurant.image_url,
                    }}
                    style={Styles.RestaurantImage}
                  />
                  <RestaurantInfo
                    name={restaurant.name}
                    rating={restaurant.rating}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                marginBottom: 130,
                justifyContent: "center",
                alignItems: "center",
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: "#15AA49",
              }}
            >
              <Entypo name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
      {adTab == 2 && (
        <ScrollView showsVerticalScrollIndicator={false} style={Styles.body}>
          {localRestaurant.slice(1, 2).map((restaurant, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {}}
              style={Styles.card}
            >
              <View style={Styles.RestaurantItem}>
                <View style={Styles.RestaurantItemContainer}>
                  <Image
                    source={{
                      uri: restaurant.image_url,
                    }}
                    style={Styles.RestaurantImage}
                  />
                  <RestaurantInfo
                    name={restaurant.name}
                    rating={restaurant.rating}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const RestaurantInfo = (props) => (
  <View style={Styles.RestaurantInfoContainer}>
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

export default MyAdListPage;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  bodyOffline: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    backgroundColor: "white",
  },
  RestaurantImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  RestaurantInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  TextHeader: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    marginVertical: 15,
  },
  RestaurantItem: {},
  btnOffline: {
    backgroundColor: "#15AA49",
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 100,
  },
  RestaurantItemContainer: {},
  textGreating: {
    fontSize: 45,
    fontWeight: "200",
    color: "#000000",
  },
  textName: {
    fontSize: 45,
    fontWeight: "700",
    color: "#000000",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  textOffline: {
    fontSize: 16,
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 22,
    color: "#000000",
  },
});
