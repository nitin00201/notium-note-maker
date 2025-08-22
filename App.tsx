import { StatusBar } from "expo-status-bar";
import LoginScreen from "screens/auth/LoginScreen";

import "./global.css";

export default function App() {
  return (
    <>
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}
