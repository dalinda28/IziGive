import React, { useEffect } from 'react';
import Font, { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountPage from './src/screens/AccountPage';
import FavoritePage from './src/screens/FavoritePage';
import HomePage from './src/screens/HomePage';
import NavigatePage from './src/screens/NavigatePage';
import RestaurantDetails from './src/screens/RestaurantDetails';

const Tabs = createBottomTabNavigator();

const App = () => {
  const [loaded] = useFonts({
    NunitoBlack: require("./src/assets/fonts/Nunito-Black.ttf"),
    NunitoBlackItalic: require("./src/assets/fonts/Nunito-BlackItalic.ttf"),
    NunitoBold: require("./src/assets/fonts/Nunito-Bold.ttf"),
    NunitoBoldItalic: require("./src/assets/fonts/Nunito-BoldItalic.ttf"),
    NunitoExtraBold: require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraBoldItalic: require("./src/assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    NunitoExtraLight: require("./src/assets/fonts/Nunito-ExtraLight.ttf"),
    NunitoExtraLightItalic: require("./src/assets/fonts/Nunito-ExtraLightItalic.ttf"),
    NunitoItalic: require("./src/assets/fonts/Nunito-Italic.ttf"),
    NunitoLight: require("./src/assets/fonts/Nunito-Light.ttf"),
    NunitoLightItalic: require("./src/assets/fonts/Nunito-LightItalic.ttf"),
    NunitoRegular: require("./src/assets/fonts/Nunito-Regular.ttf"),
    NunitoSemiBold: require("./src/assets/fonts/Nunito-SemiBold.ttf"),
    NunitoSemiBoldItalic: require("./src/assets/fonts/Nunito-SemiBoldItalic.ttf")
  });


  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ navigation, route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "HomePage":
                iconName = focused ? "home" : "home-outline";
                break;
              case "NavigatePage":
                iconName = focused ? "map" : "map-outline";
                break;
              case "FavoritePage":
                iconName = focused ? "heart" : "heart-outline";
                break;
              case "AccountPage":
                iconName = focused ? "person" : "person-outline";
                break;
            }
            return <Ionicons name={iconName} size={40} color={color} />;
          },
          headerShown: false,
          tabBarActiveBackgroundColor: "rgba(21, 170, 73, 0.5)",
          tabBarInactiveBackgroundColor: "#f8f8f8",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          tabBarItemStyle: {
            borderRadius: 200,
          },
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            position: 'absolute',
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 160,
            paddingTop: 5,
            height: 65,
            left: 40,
            right: 40,
            bottom: 40,
            ...styles.shadow
          }
        })}
      >
        <Tabs.Screen name="HomePage">
          {(props) => <HomePage />}
        </Tabs.Screen>
        <Tabs.Screen name="NavigatePage">
          {(props) => <NavigatePage />}
        </Tabs.Screen>
        <Tabs.Screen name="FavoritePage">
          {(props) => <FavoritePage />}
        </Tabs.Screen>
        <Tabs.Screen name="AccountPage">
          {(props) => <AccountPage />}
        </Tabs.Screen>
        <Tabs.Screen name="RestaurantDetails">
          {(props) => <RestaurantDetails />}
        </Tabs.Screen>

      </Tabs.Navigator>
    </NavigationContainer >
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.25,
    elevation: 5
  }
});