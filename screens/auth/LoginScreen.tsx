import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ScreenContent } from "components/ScreenContent";
import { Link, useNavigation } from "expo-router";


export default function LoginScreen() {
    const navigation = useNavigation();

  return (
    <ScreenContent title="Login" path="/login">
      <View className="w-4/5 mt-5">
        {/* Email Input */}
        <TextInput
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
          placeholderTextColor="#9CA3AF"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-gray-300 rounded-lg p-3 mb-3 text-base"
          placeholderTextColor="#9CA3AF"
        />

        {/* Forgot Password */}
        <Link href="/" asChild>
        <TouchableOpacity className="mb-6 self-end">
          <Text className="text-sm text-primary font-medium">
            Forgot Password?
          </Text>
        </TouchableOpacity>
        </Link>

        {/* Login Button */}
        <TouchableOpacity className="bg-primary p-4 rounded-xl mb-4">
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        </TouchableOpacity>

        {/* Register Link */}
        <View className="flex-row justify-center">
          <Text className="text-gray-500 text-base">Don’t have an account? </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('/screens/auth/register')}}>
            <Text className="text-primary font-semibold text-base">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContent>
  );
}
