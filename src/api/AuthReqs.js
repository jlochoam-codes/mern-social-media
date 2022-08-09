import axios from 'axios';

const authApi = axios.create({ baseURL: "http://localhost:5000" });

export const login = (loginData) => authApi.post("/auth/login", loginData);

export const signUp = (signUpData) => authApi.post("/auth/register", signUpData);
