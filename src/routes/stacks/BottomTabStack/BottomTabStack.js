import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import AuthentificationStack from "../AuthentificationStack/AuthentificationStack";
import HomeStack from "../HomeStack";
import FavoritePage from "../../../screens/FavoritePage";
import { StyleSheet } from "react-native";
import MyAdPage from "../../../screens/MyAdPage";
import EditProfile from "../../../screens/EditProfile";
import EReceiptPage from "../../../screens/EReceiptPage";
import Navigation from "../../../components/Navigation/Navigation";
import MyAdListPage from "../../../screens/MyAdListPage";

const Tabs = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
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
          position: "absolute",
          paddingBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 160,
          paddingTop: 5,
          height: 65,
          left: 40,
          right: 40,
          bottom: 40,

          ...styles.shadow,
        },
      })}
    >
      <Tabs.Screen name="HomePage">{(props) => <HomeStack />}</Tabs.Screen>
      <Tabs.Screen name="NavigatePage">{(props) => <Navigation />}</Tabs.Screen>
      <Tabs.Screen name="FavoritePage">
        {(props) => <FavoritePage />}
      </Tabs.Screen>
      <Tabs.Screen name="AccountPage">
        {(props) => <AuthentificationStack />}
      </Tabs.Screen>
      {/* <Tabs.Screen name="E-Receipt">{(props) => <EReceiptPage />}</Tabs.Screen> 
      <Tabs.Screen name="MyAddListPage">
        {(props) => <MyAdListPage />}
      </Tabs.Screen>*/}
      {/* <Tabs.Screen name="Profile">{(props) => <EditProfile />}</Tabs.Screen> */}
    </Tabs.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  shadow: {
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.25,
    elevation: 5,
  },
});
