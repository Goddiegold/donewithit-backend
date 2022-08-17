import React,{useState} from 'react';
import { FlatList,StyleSheet,View} from 'react-native';
import {ListItem} from '../components/lists';
import {ListItemDeleteAction} from '../components/lists';
import {ListItemSeperator} from '../components/lists';
import Screen from '../components/Screen';


const initialMessages = [
    {
        id:1,
        title:"title1",
        description:"description1",
        image:require('../assets/mosh.jpg')
    },
    {
        id:2,
        title:"title2",
        description:"description2",
        image:require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages)
    const [refreshing,setRefreshing] = useState(false)

const handleDelete = message =>{
setMessages(messages.filter(m=>m.id!==message.id))
}
    return (
     <Screen>
<FlatList
        data={messages}
        keyExtractor={message=>message.id.toString()}
        renderItem={({item})=><ListItem 
        onPress={()=>console.log(item.id)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
        renderRightActions={()=>
        <ListItemDeleteAction onPress={()=>handleDelete(item)}
        />}
        />}

        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={
            ()=>{
                setMessages([
                    {
        id:2,
        title:"title2",
        description:"description2",
        image:require('../assets/mosh.jpg')
    }
                ])
            }
        }
    />
     </Screen>
 
      
   
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;