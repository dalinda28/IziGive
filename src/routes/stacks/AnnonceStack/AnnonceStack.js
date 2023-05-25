import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../../screens/HomePage";
import CartPage from "../../../screens/CartPage";
import EReceiptPage from "../../../screens/EReceiptPage";
import Login from "../../../components/Authentification/Login";
import FavoritePage from "../../../screens/FavoritePage";
import MyAdPage from "../../../screens/MyAdPage";
import MyAdListPage from "../../../screens/MyAdListPage";
const AnnonceStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AnnonceDeyail" component={MyAdListPage} />
      <Stack.Screen name="AddAnnonce" component={MyAdPage} />
    </Stack.Navigator>
  );
};

export default AnnonceStack;
