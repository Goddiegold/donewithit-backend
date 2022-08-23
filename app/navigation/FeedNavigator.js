import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreeen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator()

function FeedNavigator(props) {
    return (
<Stack.Navigator screenOptions={{animation:"simple_push"}}>
    <Stack.Screen name='Listings' component={ListingsScreen}/>
    <Stack.Screen name='ListingDetails' component={ListingDetailsScreeen} options={{
        headerShown:false
    }}/>
</Stack.Navigator>
    );
}

export default FeedNavigator;