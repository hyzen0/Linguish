import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const url = axios.create({baseURL: process.env.REACT_APP_API_URL});

export const signUp = (details) => url.post('/register', details);
export const signIn = (details) => url.post('/login', details);