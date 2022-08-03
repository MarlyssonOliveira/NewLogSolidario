import { StyleSheet, Text, View } from 'react-native';
import Teste from './screens/reactcomponents';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cadastro from './screens/Cadastro';
import NovoItem from './screens/NovoItem';
import NovoBeneficiario from './screens/NovoBeneficiario';
import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaProvider>
        <Home></Home>
    </SafeAreaProvider>
  );
};
