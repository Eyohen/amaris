import axios from 'axios';
// import { URL } from './url';


const api = axios.create({
//   baseURL: `${URL}`, 
    baseURL: "http://localhost:9000",
});

export default api;