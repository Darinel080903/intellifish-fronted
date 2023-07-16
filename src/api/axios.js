import axios from 'axios';

export const axiosAPIInstance = axios.create({
    baseURL: '127.0.0.1:8080'
});

export default axios;