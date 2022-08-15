import React, { useState } from 'react';
import { TextInput, View, StyleSheet,Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({icon,
     items,
      selectedItem,
       onSelected, 
       placeholder,width="100%",
       PickerItemComponent=PickerItem,
       numColumns=1
    }) {
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}>
<View style={[styles.container,{width}]}>
      {icon&&<MaterialCommunityIcons name={icon} color={defaultStyles.colors.medium} size={20} style={styles.icon}/>}
   {selectedItem?<AppText style={styles.text}>
   {selectedItem.label}
      </AppText>:
      <AppText style={styles.placeholder}>
{placeholder}
</AppText>
      }

<MaterialCommunityIcons name="chevron-down" color={defaultStyles.colors.medium} size={20}/>
      </View>
        </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
      <Screen>
<Button title='close Modal' onPress={()=>setModalVisible(!modalVisible)}/>
<FlatList
    data={items}
    numColumns={numColumns}
    keyExtractor={item=>item.value.toString()}
    renderItem={({item})=><PickerItemComponent
    item={item}
     label={item.label}
    onPress={()=>{
        console.log(item)
        setModalVisible(false)
        onSelected(item)
        }}
     />}
/>
      </Screen>
      </Modal>
      </>
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
    },
    text:{
        flex:1
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1
    }
})

export default AppPicker;