import Constants from "expo-constants"


const settings = {
    dev: {
        apiUrl: "http://10.0.2.2:9000/api"
    },
    stagingUrl: {
        apiUrl: "http://10.0.2.2:9000/api"
    },
    prod: {
        apiUrl: "http://10.0.2.2:9000/api"
    }
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === "staging") return settings.stagingUrl;
    return settings.prod
}


export default getCurrentSettings;