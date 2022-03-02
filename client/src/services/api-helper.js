import axios from 'axios';

const baseURL = 'https://ttrpg-party-finder.herokuapp.com/'
// update baseurl once deployed

export const api = axios.create({
  baseURL
})