import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories = [
  {label:"Furniture",value:1},
  {label:"Books",value:2},
  {label:"Electronics",value:3}
]

export default function App() {
  const [category,setCategory] = useState(categories[0])
  return (
    <Screen>     
    <ListingEditScreen/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
