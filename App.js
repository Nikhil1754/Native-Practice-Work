import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ColorGenrator from '../AwesomeProject/ColorGeneratorApp/ColorGenrator';
import C1 from '../AwesomeProject/Components/C1';
import C2 from '../AwesomeProject/Components/C2';
import C3 from '../AwesomeProject/Components/C3';
import CounterApp from '../AwesomeProject/Components/CounterApp';
import CSSinMultiple from '../AwesomeProject/Components/CSSinMultiple';
import FlatDemo from '../AwesomeProject/Components/FlatDemo';
import FlexBox from '../AwesomeProject/Components/FlexBox';
import Images from '../AwesomeProject/Components/Images';
import MoviesCard from '../AwesomeProject/Components/MoviesCard';
import NetflixCard from '../AwesomeProject/Components/NetflixCard';
import OurButtons from '../AwesomeProject/Components/OurButtons';
import Login from '../AwesomeProject/Login/Login';
import News from '../AwesomeProject/NewsApp/News';
import Home from './Login/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Login/Signup';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

     <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Signup" component={Signup} />
     </Stack.Navigator>
   </NavigationContainer>
     


  );
}


