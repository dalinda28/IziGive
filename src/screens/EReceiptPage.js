import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import * as Clipboard from "expo-clipboard";

import QRCode from "react-native-qrcode-svg";
import { showToastMessage } from "../utils";
const EReceiptPage = ({ navigation }) => {
  const [copyText, setCopyText] = React.useState("54HD34CSXQ");

  const copyHandler = async () => {
    await Clipboard.setStringAsync(copyText);
    showToastMessage("success", "Copied");
  };

  return (
    <View style={Styles.container}>
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

        <Text style={Styles.titleHeader}>E-Receipt</Text>
      </View>

      <ScrollView style={Styles.body} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QRCode size={158} value="http://awesome.link.qr" />
        </View>

        <View style={Styles.statCard}>
          <View style={Styles.bodyDetail}>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Nom du donneur</Text>

              <Text style={Styles.description}>Carrefour city</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Télephone</Text>

              <Text style={Styles.description}>00 00 00 00 00</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Email</Text>

              <Text style={Styles.description}>test@test.com</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Adresse</Text>

              <Text style={Styles.description}>
                104 rue de test dans le test{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.statCard}>
          <View style={Styles.bodyDetail}>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Nom du donneur</Text>

              <Text style={Styles.description}>Carrefour city</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Télephone</Text>

              <Text style={Styles.description}>00 00 00 00 00</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Email</Text>

              <Text style={Styles.description}>test@test.com</Text>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Adresse</Text>

              <Text style={Styles.description}>
                104 rue de test dans le test{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.statCard}>
          <View style={Styles.bodyDetail}>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>N° de transaction</Text>

              <TextInput
                style={Styles.description}
                value={copyText}
                editable={false}
              />
              <TouchableOpacity onPress={copyHandler}>
                <Feather color={"black"} name="copy" size={20} />
              </TouchableOpacity>
            </View>
            <View style={Styles.contentDetail}>
              <Text style={Styles.intitule}>Status</Text>

              <Text style={Styles.descriptionStatus}>En cours</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50,
  },
  qrCode: {
    backgroundColor: "yellow",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  container1: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",

    color: "black",
  },
  bodyDetail: {
    padding: 10,
  },
  intitule: {
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    color: "black",
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "normal",
    color: "black",
  },
  descriptionStatus: {
    fontSize: 11,
    fontWeight: "600",
    fontStyle: "normal",
    color: "black",
    paddingHorizontal: 5,
    backgroundColor: "#008D28",
    borderRadius: 10,
  },
  content: {
    backgroundColor: "white",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 20,
  },

  contentDetail: {
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    width: 315,
    margin: 25,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",

    color: "black",
  },
  statCard: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#FFFFFF",

    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    backgroundColor: "white",
  },

  messagesRightDesc: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    color: "black",
    marginRight: 10,
  },
  detailStat: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailStatText: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },

  StatWeight1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default EReceiptPage;
