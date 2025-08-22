import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const isLoggedIn = false;

export default function AppNavigation() {
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
