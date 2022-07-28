import React from 'react';
import { View,StyleSheet,Image,TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable"
import { GestureHandlerRootView } from "react-native-gesture-handler";


const ListItem = ({image,title,subTitle,onPress,renderRightActions}) => {
    return (    
        <GestureHandlerRootView>
        <Swipeable 
        renderRightActions={renderRightActions}>
 <TouchableHighlight
        underlayColor={colors.light}
         onPress={onPress}>
        <View style={styles.container}>
        {image && <Image source={image} style={styles.image}/>}
<View>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subTitle}>{subTitle}</AppText>
</View>
            </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15
        // marginLeft:20
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        fontWeight:"600",
    },
    subTitle:{
        color:colors.medium
    }
})
 
export default ListItem;