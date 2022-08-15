import React from 'react';
import { View,StyleSheet,Image,TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable"
import { GestureHandlerRootView } from "react-native-gesture-handler";


const ListItem = ({image,title,subTitle,onPress, IconComponent,renderRightActions}) => {
    return (    
        <GestureHandlerRootView>
        <Swipeable 
        renderRightActions={renderRightActions}>
 <TouchableHighlight
        underlayColor={colors.light}
         onPress={onPress}>
        <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image}/>}
<View style={styles.detailsContainer}>
    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
   {subTitle&&<AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
</View>
<MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium}/>
            </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
        // marginLeft:20
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        // marginRight:10
    },
    title:{
        fontWeight:"600",
    },
    subTitle:{
        color:colors.medium
    },
    detailsContainer:{
        flex:1,
marginLeft:10,
justifyContent:"center"
    }
})
 
export default ListItem;