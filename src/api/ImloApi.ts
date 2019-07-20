import * as HTTPClient from "./HTTPClient"

export interface ITransliterateData {
    content: string,
    direction: "lat2cyr" | "cyr2lat"
}

export const transliterateApi = (data: ITransliterateData) => {
    return HTTPClient.post('transliterate', data)
}