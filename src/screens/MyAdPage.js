import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import moment from "moment";
import { getFirestore, collection, doc, setDoc } from "@firebase/firestore";
import { TextField } from "../components/TextField";
import { auth } from "../Firebase/firebase";
import { showToastMessage } from "../utils";
const MyAdPage = () => {
  const [productName, setProductName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [description, setDescription] = useState();
  const [rdvPlace, setRDVPlace] = useState();
  const [availablity, setAvailablity] = useState();

  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [quantity, setQuantity] = useState(1);

  const firestore = getFirestore();
  const annonceCollection = collection(firestore, "annonces");

  const currentUser = auth.currentUser;

  //Reset all fields

  const ResetFields = () => {
    setProductName(null);
    setSelectedImage(null);
    setSelectedDate(null);
    setRDVPlace(null);
    setAvailablity(null);
    setQuantity(1);
    setDescription(null);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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

  const HandlerSubmit = async () => {
    try {
      const annonceDoc = doc(annonceCollection);
      const annonceData = {
        annonceName: productName,
        description,
        date: selectedDate,
        appointment: rdvPlace,
        availablity,
        userId: currentUser.uid,
        quantity,
        image_url: selectedImage,
      };
      await setDoc(annonceDoc, annonceData);
      showToastMessage("success", "ajouter avec succès");
      ResetFields();
    } catch (error) {
      showToastMessage("error", "erreur lors de l'enregistrement");
    }
  };

  return (
    <ScrollView style={Styles.container}>
      <View>
        <Text style={Styles.TextHeader}>Mes annonces</Text>
      </View>
      <View>
        <TextField
          placeholder="Nom du produit"
          value={productName}
          onTextChange={setProductName}
        />
        {/* <TextField placeholder="Description" /> */}
        <View style={Styles.multiLineInput}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={200}
            style={{ padding: 10 }}
            placeholder={"Description"}
            blurOnSubmit={true}
            autoCapitalize="none"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#989898",
            borderWidth: 1,
            backgroundColor: "white",
            marginTop: 10,
            padding: 14,
            maxHeight: 50,
            borderRadius: 20,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{ color: "#959595" }}>{` ${
              selectedDate
                ? moment(selectedDate).format("YYYY/MM/DD")
                : `${"Date "}`
            }`}</Text>

            <DateTimePickerModal
              locale="fr_FR"
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>

        <TextField
          placeholder="Lieu du rendez vous"
          value={rdvPlace}
          onTextChange={setRDVPlace}
        />
        <TextField
          placeholder="Disponibilité"
          value={availablity}
          onTextChange={setAvailablity}
        />
        <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
          <View style={Styles.contentDetail}>
            <Text style={Styles.intitule}>Quantité</Text>

            <View style={{ width: "30%", flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#424B5A",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
                onPress={handleDecrement}
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
                  {quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#424B5A",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                }}
                onPress={handleIncrement}
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
          <View style={Styles.contentDetail}>
            <Text style={Styles.intitule}>Ajouter une photo</Text>
            <TouchableOpacity onPress={handleImageSelection}>
              <AntDesign name="picture" size={30} />
              <Text>{selectedImage}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
          onPress={HandlerSubmit}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyAdPage;
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
  contentDetail: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  intitule: {
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#959595",
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "normal",
    color: "black",
  },
  multiLineInput: {
    borderColor: "#989898",
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    maxHeight: 80,
    borderRadius: 20,
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
