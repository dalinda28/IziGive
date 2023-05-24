import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../../components/Authentification/Login";
import Register from "../../../components/Authentification/Register";
import { auth } from "../../../Firebase/firebase";
import EditProfile from "../../../screens/EditProfile";

const Stack = createStackNavigator();

export default function AuthentificationStack() {
  //Get a current user

  const currentUser = auth.currentUser;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* make a condition (if user is connected i show an edit page else i show an authentifications screens) */}
      {currentUser ? (
        <Stack.Screen name="EditProfile" component={EditProfile} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
