import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { imagesDataURL } from "../constants/data";
import { StyleSheet } from "react-native";
import { TextField } from "../components/TextField";
import { auth } from "../Firebase/firebase";
import { updateProfile } from "firebase/auth";
import { showToastMessage } from "../utils";

const EditProfile = ({ navigation }) => {
  const currentUser = auth.currentUser;
  const [selectedImage, setSelectedImage] = useState(currentUser.photoURL);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userType = "Commercant";
  const handleUpdateProfile = () => {
    // Mettre à jour les informations de profil de l'utilisateur dans Firebase

    updateProfile(currentUser, {
      displayName: name,
      email: email,
      userType: userType,
      password: password,
      photoURL: selectedImage,
    })
      .then(() => {
        // Afficher un message de confirmation à l'utilisateur
        showToastMessage(
          "success",
          "Votre profil a été mis à jour avec succès"
        );
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Une erreur s'est produite lors de la mise à jour de votre profil"
        );
      });
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>

        <Text style={Styles.titleHeader}>Modifier mon profil</Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TextField
            placeholder="Nom complet"
            value={name}
            onTextChange={setName}
          />

          <TextField
            placeholder="Email"
            value={email}
            onTextChange={setEmail}
          />
          {/* <TextField
            placeholder="Nom d'utilisateur"
            value={username}
            onTextChange={setUsername}
          /> */}
          <TextField
            placeholder="Mot de passe"
            value={password}
            onTextChange={setPassword}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginBottom: 130,
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#15AA49",
            }}
            onPress={handleUpdateProfile}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
              Modifier
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const Styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50,
  },

  titleHeader: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",

    color: "black",
  },
});
