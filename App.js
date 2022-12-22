import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import { getUser} from './app/auth/storage';
import { decodeUserToken } from './util/user';
import AppLoading from 'expo-app-loading';
import {navigationRef} from "./app/navigation/rootNavigation";

export default function App() {
// NetInfo.fetch()
// .then(netInfo=>console.log(netInfo))
// .catch(err=>console.log(err))
// const unsubcribe = NetInfo.addEventListener(netInfo => console.log(netInfo))
// const netInfo = useNetInfo()
// console.log(netInfo)

const [user,setUser]= useState({
  name:""
})

const [isReady,setIsReady] = useState(false)

const restoreUser = async () => {
  const currentUser = await getUser()
  if(currentUser) setUser(currentUser)
}

// useEffect(()=>{
//   if(user.name) return;
// restoreUser()

// },[])


const navigationRef = React.createRef();
const navigation = navigationRef.current;
 
if(!isReady) return <AppLoading
onError={console.warn}
  onFinish={() => setIsReady(true)}
 startAsync={restoreUser}/>
  return (
    <AuthContext.Provider value={{user,setUser}}> 
    <OfflineNotice/>
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
     {user.name ? <AppNavigator/> : <AuthNavigator/>}
      {/* <AppNavigator/> */}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


