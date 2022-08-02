import { StyleSheet, Text, View } from 'react-native';
import Teste from './screens/reactcomponents';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Teste></Teste>
      </View>
    </SafeAreaProvider>
  );
};
