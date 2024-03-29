import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../../screens/HomePage";
import CartPage from "../../../screens/CartPage";
import EReceiptPage from "../../../screens/EReceiptPage";
import Login from "../../../components/Authentification/Login";
const HomeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomePage} />
      <Stack.Screen name="CartScreen" component={CartPage} />
      <Stack.Screen name="EReceiptScreen" component={EReceiptPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
