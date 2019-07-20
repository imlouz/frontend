import axios from "axios";

const API_HOST = "https://api.tekshir.uz/";

export const config = (path: string, method: string) => (data?: object, headers: any = {}) => {

    // @ts-ignore
    return axios({
        url: path,
        baseURL: API_HOST,
        method,
        data,
        headers: {
            "Accept": "application/json",
            ...headers
        }
    })
}

export const get = (path, data) => {
    return config(path, "get")(data)
}

export const post = (path, data) => {
    return config(path, "post")(data)
}