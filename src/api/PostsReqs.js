import axios from 'axios';

const postsApi = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (userId) => postsApi.get(`/${userId}`);
