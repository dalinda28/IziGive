import React from "react";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./src/routes/stacks/BottomTabStack/BottomTabStack";

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
    NunitoSemiBoldItalic: require("./src/assets/fonts/Nunito-SemiBoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabStack />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
