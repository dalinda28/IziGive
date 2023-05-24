import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import Main from "../components/Home/Main";
import Search from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantItem, {
  localRestaurant,
} from "../components/Home/RestaurantItem";
import { auth } from "../Firebase/firebase";

const YELP_API_KEY =
  "dh-ilvDFreUKZR8idugS0a0JIvU7KhDE5BeasoYfyjcqsCeMAfRbEsgOkxH79XAnk7izgUXIwinpguu6HlC7M8xxIx0fIu4sdNbBnXCqBWzRFECIMB_bqGGcnWYZZHYx";

const HomePage = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("Paris");
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState();

  const getRestaurantFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpurl, apiOptions).then((res) =>
      res.json().then((json) => setRestaurantData(json.businesses))
    );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Main />
        <Search cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
