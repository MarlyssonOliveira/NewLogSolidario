import { StyleSheet, Text, View } from "react-native";
import Teste from "./screens/reactcomponents";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cadastro from "./screens/Cadastro";
import NovoItem from "./screens/NovoItem";
import NovoBeneficiario from "./screens/NovoBeneficiario";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Doacoes from "./screens/Doacoes";
import StackNavigator from "./route/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';



export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
