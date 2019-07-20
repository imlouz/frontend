const API_HOST = "https://api.tekshir.uz/";

import axios, {Method} from "axios";

export const config = (path: any, method: Method) => {
    return (data?: object, headers: any = {}) => {

        return axios({
            url: path,
            method,
            baseURL: API_HOST,
            params: data,
            headers: {
                "Accept": "application/json",
                ...headers
            }
        })
    };
}

export const get = (path, data) => {
    return config(path, "get")(data)
}

export const post = (path, data) => {
    return config(path, "post")(data)
}