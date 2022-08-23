import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AcccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator()

function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed'
             options={{ headerShown: false,tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"home"}/> }}
             component={FeedNavigator}/>
            <Tab.Screen name='ListingEdit'
             component={ListingEditScreen} 
             options={({navigation})=>({
                tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate("ListingEdit")}/>,   
                tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"plus-circle"}/>})}/>
            <Tab.Screen name='#' component={AcccountNavigator} options={{headerShown:false,tabBarIcon:({color,size})=><MaterialCommunityIcons size={size} color={color} name={"account"}/>}}/>
        </Tab.Navigator>
    );
}

export default AppNavigator;