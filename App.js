import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';
import { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from "expo-image-picker";
import  * as Permissions from "expo-permissions";
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

const categories = [
  {label:"Furniture",value:1},
  {label:"Books",value:2},
  {label:"Electronics",value:3}
]

export default function App() {
  const [category,setCategory] = useState(categories[0])
const [imageUris,setImageUris] = useState([])

function handleAdd(uri){
  setImageUris([...imageUris,uri])
}

function handleRemove(uri){
  setImageUris(imageUris.filter(imageUri=>imageUri!==uri))
}
  return (
    <Screen>  
<ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
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
