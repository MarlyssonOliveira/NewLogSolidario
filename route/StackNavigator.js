import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../screens/Cadastro';
import DetalhesDoacao from '../screens/DetalhesDoacao';
import DetalhesEntrega from '../screens/DetalhesEntrega';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NovaDoacao from '../screens/NovaDoacao';
import NovaEntrega from '../screens/NovaEntrega';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="NovaEntrega" component={NovaEntrega} options={{headerShown:false}}/>
      <Stack.Screen name="NovaDoacao" component={NovaDoacao} options={{headerShown:false}}/>
      <Stack.Screen name="DetalhesEntrega" component={DetalhesEntrega} options={{headerShown:false}}/>
      <Stack.Screen name="DetalhesDoacao" component={DetalhesDoacao} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}