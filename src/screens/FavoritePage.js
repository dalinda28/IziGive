import React, { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Database } from "firebase/database";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { signOut } from "firebase/auth";

import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../Firebase/firebase";
import { showToastMessage } from "../utils";
import { useNavigation } from "@react-navigation/native";

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
const FavoritePage = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  //Get a current user
  const nav = useNavigation();
  const currentUser = auth.currentUser;

  // useEffect(() => {
  //   // Récupérer la liste des favoris de l'utilisateur actuel depuis Firebase Realtime Database

  //   const userId = currentUser.uid;
  //   const favoritesRef = firestore.ref("favorites/" + userId);
  //   favoritesRef.on("value", (snapshot) => {
  //     if (snapshot.exists()) {
  //       setFavorites(Object.values(snapshot.val()));
  //     } else {
  //       setFavorites([]);
  //     }
  //   });

  //   return () => favoritesRef.off();
  // }, []);

  // useEffect(() => {
  //   // Vérifier si l'élément actuel est déjà un favori
  //   const userId = firebase.auth().currentUser.uid;
  //   const favoriteRef = firebase
  //     .database()
  //     .ref("favorites/" + userId)
  //     .child("Nouvel élément favori");
  //   favoriteRef.on("value", (snapshot) => {
  //     setIsFavorite(snapshot.exists());
  //   });

  //   return () => favoriteRef.off();
  // }, []);

  if (!currentUser) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.TextHeader}>Mes favoris </Text>

        <View style={Styles.bodyOffline}>
          <Text style={Styles.textOffline}>
            Veuillez vous connecter pour accéder a cette fonctionnalité
          </Text>
          <TouchableOpacity
            style={Styles.btnOffline}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={Styles.btnText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const LogOutHandler = () => {
    signOut(auth)
      .then(() => {
        showToastMessage("success", "vous etes deconnecte de l'application");
      })
      .catch((error) => {
        showToastMessage("error", "Erreur");
      });
  };
  // const handleToggleFavorite = () => {
  //   // Ajouter ou supprimer l'élément actuel de la liste des favoris de l'utilisateur actuel dans Firebase Realtime Database
  //   const userId = firebase.auth().currentUser.uid;
  //   const favoriteRef = firebase
  //     .database()
  //     .ref("favorites/" + userId)
  //     .child("Nouvel élément favori");

  //   if (isFavorite) {
  //     favoriteRef.remove();
  //     setIsFavorite(false);
  //   } else {
  //     favoriteRef.set("Nouvel élément favori");
  //     setIsFavorite(true);
  //   }
  // };
  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={Styles.textGreating}>Bonjour,</Text>
          <Text style={Styles.textName}>{currentUser?.displayName}</Text>
        </View>
        <TouchableOpacity onPress={LogOutHandler}>
          <Entypo name="log-out" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={Styles.TextHeader}>Mes favoris </Text>

      <ScrollView showsVerticalScrollIndicator={false} style={Styles.body}>
        {localRestaurant.map((restaurant, index) => (
          <TouchableOpacity key={index} onPress={() => {}} style={Styles.card}>
            <View style={Styles.RestaurantItem}>
              <View style={Styles.RestaurantItemContainer}>
                <Image
                  source={{
                    uri: restaurant.image_url,
                  }}
                  style={Styles.RestaurantImage}
                />
                <View style={Styles.RestaurantInfoContainer}>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {restaurant.name}
                    </Text>
                    <Text
                      style={{ fontSize: 13, color: "gray", marginTop: 10 }}
                    >
                      30-45 • min
                    </Text>
                  </View>

                  <TouchableOpacity style={{ bottom: 10 }}>
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={25}
                      color={isFavorite ? "red" : "white"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoritePage;
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
