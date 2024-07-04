import axios from "axios";

const API_BASE_URL = "http://localhost:7070";

export const login = (username: string, password: string) => axios
  .post(`${API_BASE_URL}/login`, { username, password })
  .then((respose) => ({ user: respose.data, token: respose.headers.authorization }));

export const getUser = (token: string) => axios.get(`${API_BASE_URL}/user`, { headers: { Authorization: token } })
  .then((response) => response.data);


export const getLatestPost = () => axios.get(`${API_BASE_URL}/latestPosts`).then((response) => response.data);


export const follow = (token: string, userId: string) => axios.put(`${API_BASE_URL}/user/${userId}/follow`, {}, { headers: { Authorization: token } }).then((response) => response.data);