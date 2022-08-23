import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/Text';
import colors from '../config/colors';
import {ListItem }from '../components/lists';

const ListingDetailsScreeen = ({route}) => {
    const listing = route.params;
    return (
        <>
            <View>
                <Image style={styles.image} source={listing.image} />
                <AppText></AppText>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>${listing.price}</AppText>
<View style={styles.userContainer}>
<ListItem
                    image={require("../assets/favicon.png")}
                    title="John Doe"
                    subTitle="10 Listings"
                />
</View>
                </View>
             
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10
    },
    userContainer:{
        marginVertical:40
    }
})

export default ListingDetailsScreeen;