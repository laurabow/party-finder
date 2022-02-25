import axios from 'axios';

const baseUrl = 'http://localhost:3000/'
// update baseurl once deployed

export const api = axios.create({
  baseURL: baseUrl
})