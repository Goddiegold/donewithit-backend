import React, {useState,useEffect} from 'react';
import * as Location from "expo-location"



export default function useLocation(props) {
    const [location,setLocation] = useState()

    async function getLocation(){
        try{
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
           const {coords:{latitude,longitude}} = await Location.getLastKnownPositionAsync()
           setLocation({latitude,longitude})
        }catch(err){
console.log(err)
        }
      
    }

    useEffect(()=>{
        getLocation();
            },[])

    return location;
}

