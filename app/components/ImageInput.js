import react,{useEffect} from 'react';
import {StyleSheet,View,Image, TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({imageUri,onChangeImage}) {
    async function selectImage(){
        try{
           const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            quality:0.5
           })
           if(!result.cancelled)
           onChangeImage(result.uri)
        }catch(error){
    console.log("Error reading an image",error)
        }
      }

      async function requestPermission(){
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted) return alert('You need to display permission to access the library.')
      }
      
        useEffect(()=>{
      requestPermission()
        },[]);

function handlePress(){
    if(!imageUri) selectImage();
    else Alert.alert('Delete','Are you sure you want to delete this image?',[
        {text:"Yes",onPress:()=>onChangeImage(null)},
        {text:'No'}
    ])
}

return(
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
{!imageUri&&<MaterialCommunityIcons name='camera' size={40} color={colors.medium}/>}
{imageUri&&<Image source={{uri:imageUri}} style={styles.image}/>}
</View>
    </TouchableWithoutFeedback>
)}

const styles = StyleSheet.create({
container: {
    alignItems:"center",
    backgroundColor:colors.light,
    borderRadius:15,
    height:100,
    overflow:"hidden",
    justifyContent:"center",
    width:100
},
image:{
    width:"100%",
    height:"100%"
}
})

export default ImageInput;