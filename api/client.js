// import {create} from "apisauce"
// import axios from "axios"

// const apiClient = create({
//     baseURL: 'http://192.168.8.101:9000/api'
// })

// export default apiClient;


import axios from "axios";
import cache from "../util/cache";
import { getToken } from "../app/auth/storage";
import currentSettings from "../app/config/settings";

function log(err) {
  console.log(err);
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected errors (network down, server down, db down, bug)
  // - Log them
  // - Display generic and friendly error message to user

  if (!expectedError) {
    log(error);
  }
  return Promise.reject(error);
});

const apiClient = axios.create({
  // baseURL:"https://donewithit-backend.onrender.com/api"
  baseURL: "http://10.0.2.2:9000/api"
// baseURL: currentSettings().apiUrl
})




apiClient.interceptors.request.use(async config=>{
  const token = await getToken()
  if(!token) return config; 
  config.headers['x-auth-token'] = token;
	return config;
})

//192.168.8.1 

const get = apiClient.get;
apiClient.get = async (url, config) => {
  //before
  const response = await get(url, config)

  if (response.data) {
    await cache.store(url, response.data)
    return response; 
  }

  //after
  const data = await cache.get(url);
  console.log("cahced data",data)
  return data ? {data}  : response;

}


export default apiClient;

