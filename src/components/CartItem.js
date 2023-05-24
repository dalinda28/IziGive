import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartItemData = [
  {
    id: "1",
    name: "Panier petit prix ",
    desc: "1 tacos, 1 paquet de  nachos, 1 portion de guacamole",
    image: require("../assets/Food.png"),
  },
  {
    id: "2",
    name: "Panier petit prix ",
    desc: "1 tacos, 1 paquet de  nachos, 1 portion de guacamole",
    image: require("../assets/Food.png"),
  },
  {
    id: "3",
    name: "Panier petit prix ",
    desc: "1 tacos, 1 paquet de  nachos, 1 portion de guacamole",
    image: require("../assets/Food.png"),
  },
];

const CartItem = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {CartItemData.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View style={{ width: "25%" }}>
              <Image
                source={item.image}
                style={{
                  height: 61,
                  width: 64,
                  resizeMode: "cover",
                  borderRadius: 8,
                }}
              />
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.TextName}>{item.name}</Text>
              <Text>{item.desc}</Text>
            </View>
            <View style={{ width: "30%", flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#424B5A",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    backgroundColor: "#EBEBEB",
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                  }}
                >
                  1
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#424B5A",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View style={{ marginBottom: 110, marginTop: 10 }}>
        <TouchableOpacity style={styles.btnOffline}>
          <Text style={styles.btnText}>FINALISER LA COMMANDE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    margin: 5,
    fontSize: 14,
    lineHeight: 16,

    color: "#A1A1A1",
  },
  TextName: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    margin: 5,

    color: "#121212",
  },
  HeaderDesc: {
    padding: 10,
  },
  btnOffline: {
    backgroundColor: "#15AA49",
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});
