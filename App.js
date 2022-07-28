import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
  <Screen>
     <ListItem title={"My Title"} subTitle={"Subtitle innit"}/>
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
