import React, { useEffect } from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AcccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import { registerToken } from '../../api/auth';
import navigation from "../../app/navigation/rootNavigation";

const Tab = createBottomTabNavigator()

function AppNavigator() {
const registerForPushNotifications = async()=>{
    try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if(!permission.granted) return;
     
        const token =  await Notifications.getExpoPushTokenAsync()
        console.log(token)
        registerToken(token.data)
    } catch (error) {
        console.log('Error getting a push notification token--->',error)
    }
}

useEffect(()=>{
registerForPushNotifications()

Notifications.addNotificationReceivedListener(notifications=>{
    navigation.navigate('Account')
})

// Notifications.addNotificationResponseReceivedListener(response => {
//     console.log(response);
//   });
},[])
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed'
             options={{ headerShown: false,tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"home"}/> }}
             component={FeedNavigator}/>
            <Tab.Screen name='ListingEdit'
             component={ListingEditScreen} 
             options={({navigation})=>({
                // tabBarButton:({onPress})=><NewListingButton onPress={()=>onPress()}/>,   
                tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"plus-circle"}/>
                })}
                />
            <Tab.Screen name='Profile' component={AcccountNavigator} options={{headerShown:false,tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"account"}/>}}/>
        </Tab.Navigator>
    );
}

export default AppNavigator;