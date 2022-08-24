import axios from 'axios';

const imageApi = axios.create({ baseURL: "http://localhost:5000" });

export const uploadImage = data => imageApi.post('/upload/image/', data);
