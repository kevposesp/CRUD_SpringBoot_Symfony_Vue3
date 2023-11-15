import axios from "axios";
import coreConfig from "../config"

export const httpClient = axios.create({
    baseURL: coreConfig.SPRINGBOOT_URL
})

if (localStorage.getItem("jwt")) {
    httpClient.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem("jwt");
}

const springBootApiService = {
    get(path) {
        return httpClient.get(path)
            .catch((error) => { throw new Error(error) })
    }
}

export default springBootApiService