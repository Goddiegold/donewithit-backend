import http from './client';


export const login = async (user) => await http.post("/auth",{...user})

/**  route to register */
export const register = async (user) => await http.post("/users",{...user})


export const registerToken = async (pushToken) => await http.post("/expoPushTokens",{token:pushToken})


export const sendMessage = async (message,listingId) => await http.post("/messages",{
    message,listingId 
})
