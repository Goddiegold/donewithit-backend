import * as  SecureStore from "expo-secure-store";
import { decodeUserToken } from "../../util/user";

const key  = "doneWithItUserAuthToken";

export const storeToken =async authToken => {
    try{
        await SecureStore.setItemAsync(key,authToken)
    }catch(ex){
        alert("Something went wrong!")
console.log(ex)
    }
}


export const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (ex) {
        console.log(ex)
        alert("Something went wrong!")
    }
}


export const getUser = async () => {
const token = await getToken()
return token ? decodeUserToken(token) : null
}

export const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (ex) {
        console.log(ex)
        alert("Something went wrong!")
    } 
}