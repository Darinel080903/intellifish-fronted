import axios from 'axios';

export const axiosAPIInstance = axios.create({
    baseURL: 'http://52.72.109.141/api'
});
    
export default axios;