import axios from 'axios';

const postsApi = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (userId) => postsApi.get(`/${userId}`);

export const likePost = (postId, userId) => postsApi.put(`/post/like/${postId}`, userId);

export const unlikePost = (postId, userId) => postsApi.put(`/post/unlike/${postId}`, userId);
