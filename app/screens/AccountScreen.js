import React from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native';
import {ListItem} from '../components/lists';
import colors from '../config/colors';
import Icon from '../components/Icon';
import {ListItemSeperator} from '../components/lists';

const menuItems = [
    {title:"My Listings",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    }
},
{title:"My Messages",
icon:{
    name:"email",
    backgroundColor:colors.secondary
}
}
]

function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
       <View style={styles.container}>
       <ListItem
            title={"John Wick"}
            subTitle={"johnwick@boxoffice.org"}
            image={require("../assets/mosh.jpg")}
        />
       </View>

       <View style={styles.container}>
        <FlatList
            data={menuItems}
            ItemSeparatorComponent={ListItemSeperator}
            keyExtractor={menuItem=>menuItem.title}
            renderItem={({item})=><ListItem 
                title={item.title}

                IconComponent={<Icon
                 name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}

                  />}
            />}
        />
       </View>
<ListItem
    title={"Logout"}
    IconComponent={
        <Icon
            name="logout"
            backgroundColor="#ffe66d"
        />
    }
/>
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})

export default AccountScreen;