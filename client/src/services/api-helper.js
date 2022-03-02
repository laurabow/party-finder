import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'https://ttrpg-party-finder.herokuapp.com/' || 'http://localhost:3000/'
// update baseurl once deployed

export const api = axios.create({
  baseURL: baseUrl
})