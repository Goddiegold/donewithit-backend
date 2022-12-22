import React, { useEffect, useState } from 'react';
import { FlatList, View,StyleSheet} from 'react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from "../components/Screen";
import Card from "../components/Card";
import AppButton  from '../components/Button';
import colors from '../config/colors';
import routes from "../navigation/routes";
import listingsApi from '../../api/listings';
import AppText from '../components/Text';
import useApi from '../hooks/useApi';

//const listings =[
//     {
//         id:1,
//         title:"Red jacket for sales!",
//         price:100,
//         image:require("../assets/jacket.jpg")
//     },
//     {
//         id:2,
//         title:"Couch in great condition!",
//         price:400,
//         image:require("../assets/couch.jpg")
//     }
// ]

function ListingsScreen({navigation}) {
  const [listings,setListings] = useState([])
  const [reqState,setReqState] = useState({
    loading:false,
    error:false
  })

   // const {data:listings,loading,error,request:loadListings} = useApi(listingsApi.getListings)
const loadListings = () => {
    setReqState({...reqState,loading:true})
    listingsApi.getListings().then(res=>{
        console.log(res)
        setListings(res.data)
        setReqState({...reqState,loading:false})
        }).catch(err=>{
            setReqState({error:true,loading:false})
            console.log(err)
        })
}

    useEffect(()=>{
 loadListings()
    },[])

// console.log(listings)
    return (
        <>
        <ActivityIndicator visible={reqState.loading}/>
   <Screen style={styles.screen}>
   {reqState.error&&(
   <>
   <AppText>Couldn't retrieve the listings.</AppText>
   <AppButton title="Retry" onPress={loadListings}>Retry</AppButton>
   </>)
  }
  {/* <ActivityIndicator animating={loading} size="large"/> */}

<FlatList
data={listings}
keyExtractor={listing=>listing.id.toString()}
renderItem={({item})=><Card
    title={item.title}
    subTitle={"$"+item.price}
    imageUrl={item.images[0].url}
    thumbnailUrl={item.images[0].thumbnailUrl}
    onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
/>
}
/>
   </Screen>
   </>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light
    }
})
export default ListingsScreen;