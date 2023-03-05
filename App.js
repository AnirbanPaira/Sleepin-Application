import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Application from "./components/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "./components/contact"; //ye function ka name hai
import Users from "./components/Users";
import RegisterationForm from "./components/RegisterationForm";
import Edit from "./components/EditUser";
import SleppingHours from "./components/SleepingHours";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Application} />
        <Stack.Screen name="Dashbord" component={Contacts} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Register" component={RegisterationForm} />
        <Stack.Screen name="EditUser" component={Edit} />
        <Stack.Screen name="Sleeping Hours" component={SleppingHours} />
      </Stack.Navigator>
    </NavigationContainer>
  ); //name mai jo bhi dega woh navigation.navigate mai hona cahiye
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
