import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = "cahce";
const expiryInMinutes = 5;

const store = async (key, value) => {
    const item = {
        value,
        timestamp: Date.now()
    }
    try {
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = moment(Date.now())
    const itemTime = moment(item.timestamp)
    return now.diff(itemTime, 'minutes') > expiryInMinutes;
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value)
        // return item ? item : null
        if (!item) return null

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key)
            return null
        }
        return item.value;
    } catch (err) {
        console.log(err)
    }

}

export default {
    store, get
}