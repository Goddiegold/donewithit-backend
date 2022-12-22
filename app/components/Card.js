import React from 'react';
import {
    View, StyleSheet,
    // Image
    TouchableWithoutFeedback
} from 'react-native';
import colors from "../config/colors";
import AppText from "./Text";
import { Image } from 'react-native-expo-image-cache'

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    console.log(imageUrl, thumbnailUrl)
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {/* <Image source={{uri:imageUrl}} style={styles.image}/> */}
                <Image style={styles.image} uri={imageUrl} preview={
                    { uri: thumbnailUrl }
                } tint="white" />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})
export default Card;