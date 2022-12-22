import React from 'react';
import LottieView from 'lottie-react-native'
import { View,StyleSheet } from 'react-native';

function ActivityIndicator({visible=false}) {
    if(!visible) return null; 
return(
<LottieView
style={styles.overlay}
autoPlay
loop
source={require("../assets/animations/loader.json")}
/>
)
}

const styles = StyleSheet.create({
    overlay:{
        position:"absolute",
        opacity:0.8,
        backgroundColor:"white",
        height:"100%",
        width:"100%",
        zIndex:1
    }
})

export default ActivityIndicator;