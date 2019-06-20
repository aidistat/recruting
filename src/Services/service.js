import axios from "axios";
import { apiEndpoint } from '../settings';

const axiosInstance = axios.create({
    baseURL: apiEndpoint
});

const fetchJson = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const fetchJson = async (url) => {
    const response = await fetch(url, {
        body: {},
        method: 'POST',
        headers: {}
    });
    return await response.json();
}
