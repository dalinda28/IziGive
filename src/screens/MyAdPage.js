import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import React, { useState } from "react";
import moment from "moment";
import { TextField } from "../components/TextField";
const MyAdPage = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

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

  const onSelectSwitch = (value) => {
    setAdTab(value);
  };

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.TextHeader}>Mes annonces</Text>
      </View>
      <View>
        <TextField placeholder="Nom du produit" />
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
            onChangeText={() => console.log("hello guys")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#989898",
            borderWidth: 1,
            backgroundColor: "#EEEEEE",
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

        <TextField placeholder="Lieu du rendez vous" />
        <TextField placeholder="Disponibilité" />
        <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
          <View style={Styles.contentDetail}>
            <Text style={Styles.intitule}>Quantité</Text>

            <Text style={Styles.description}>Carrefour city</Text>
          </View>
          <View style={Styles.contentDetail}>
            <Text style={Styles.intitule}>Ajouter une photo</Text>
            <AntDesign name="picture" size={30} />
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
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: "#EEEEEE",
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
