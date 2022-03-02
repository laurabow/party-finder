import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://ttrpg-party-finder.herokuapp.com/' : 'http://localhost:3000/'
// update baseurl once deployed

export const api = axios.create({
  baseURL
})