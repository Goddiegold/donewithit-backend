import React from 'react';
import { TextInput, View, StyleSheet,Platform } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({icon,width="100%",...otherProps}) {
    return (
      <View style={[styles.container,{width}]}>
{icon&&<MaterialCommunityIcons name={icon} color={defaultStyles.colors.medium} size={20} style={styles.icon}/>}
<TextInput
placeholderTextColor={defaultStyles.colors.medium}
style={defaultStyles.text}
{...otherProps}
/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:'row',
        padding:15,
        marginVertical:10
    },
    icon:{
marginRight:10
    }
})

export default AppTextInput;