import jwtDecode from "jwt-decode";


export const decodeUserToken = (token) => {
    try {
        if(!token) return null;
        if (token) return { ...jwtDecode(token), token }
    }
    catch (ex) {
        console.log(ex)
    }
    
}