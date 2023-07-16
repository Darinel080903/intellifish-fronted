import axios from 'axios';

export const axiosAPIInstance = axios.create({
    baseURL: 'http://localhost:8080'
});
    
export default axios;