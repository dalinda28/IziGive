import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../../screens/HomePage";
import CartPage from "../../../screens/CartPage";
import EReceiptPage from "../../../screens/EReceiptPage";
import Login from "../../../components/Authentification/Login";
import FavoritePage from "../../../screens/FavoritePage";
const FavoriteStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FavoriteScreen" component={FavoritePage} />
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
