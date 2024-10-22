import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://3d188db0b7bce9c0.mokky.dev/',
    timeout: 10000, 
    headers: { 'Content-Type': 'application/json' } 
});

export default instance; //