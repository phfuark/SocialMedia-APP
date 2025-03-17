import axios from 'axios';
import { SERVER_URL } from '../constants/constants';

const BASE_URL = SERVER_URL;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const get_user_profile_data = async (username) => {
    try {
        const response = await api.get(`/user_data/${username}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; 
    }
};

export const login = async (username, password) => {
    try { 
        const response = await api.post(`/token`, { username, password }); 
        return response.data; 
    } catch (error) { 
        console.error("Error during login:", error);
        throw error;
    } 
};
