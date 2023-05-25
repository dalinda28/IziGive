import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { AntDesign } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
const CartPage = (props) => {
  const [rating, setRating] = React.useState(
    props?.route?.params?.restaurant?.rating
  );

  const image = { uri: props?.route?.params?.restaurant?.image_url };

  return (
    <View style={styles.container}>
      <View style={{ height: 220 }}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              position: "absolute",
              left: 10,
              top: 30,
            }}
          >
            <AntDesign name="arrowleft" size={28} color="white" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.HeaderDesc}>
        <Text style={styles.TextName}>
          {props?.route?.params?.restaurant?.name}
        </Text>
        <StarRating
          rating={rating}
          onChange={setRating}
          color={"#000000"}
          starSize={15}
        />
        <View>
          <Text style={styles.text}>
            ( {props?.route?.params?.restaurant?.review_count} Avis ) -{" "}
            {props?.route?.params?.restaurant?.location?.display_address[2]}
          </Text>
        </View>

        <Text style={styles.text}>
          {props?.route?.params?.restaurant?.location?.display_address}
        </Text>
      </View>
      <View style={{ width: "100%", borderWidth: 1, borderColor: "#D7D7D7" }} />
      <CartItem navigation={props.navigation} />
    </View>
  );
};

{
  /* <Text>{JSON.stringify(props?.route?.params)}</Text> */
}
export default CartPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
