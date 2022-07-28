import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <>
        <View
        style={styles.container}
        >
        <View style={{
            paddingBottom:30
        }}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color={"white"} size={35}
            />
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color={"white"} size={35}/>
        </View>
        </View>
       
            <Image resizeMode='contain'
            source={require('../assets/chair.jpg')} style={styles.image}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{ 
        backgroundColor:colors.black,
        flex:1
    },
    closeIcon:{
        position:"absolute",
        top:20,
        left:30
    }
,
deleteIcon:{
        position:"absolute",
        top:20,
        right:30
    }
})

export default ViewImageScreen;