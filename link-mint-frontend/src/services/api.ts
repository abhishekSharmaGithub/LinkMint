import axios from 'axios'
import { UrlResponse } from '../types/url'

const BASE_URL = import.meta.env.VITE_API_URL;

export const shortenUrl = async (longUrl:string): Promise<UrlResponse> => {
    const response = await axios.post(`${BASE_URL}/api/url/shorten`,{longUrl});
    return response.data;

}