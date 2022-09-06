import axios from 'axios';

const userApi = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => userApi.get(`/user/${userId}`);
export const updateUser = (userId, userData) => userApi.put(`/user/${userId}`, userData);
