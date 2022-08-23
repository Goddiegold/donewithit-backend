import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreeen from '../screens/ListingDetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator()

function AcccountNavigator(props) {
    return (
<Stack.Navigator>
    <Stack.Screen name='Account' component={AccountScreen}/>
    <Stack.Screen name='Messages' component={MessagesScreen}/>
</Stack.Navigator>
    );
}

export default AcccountNavigator;