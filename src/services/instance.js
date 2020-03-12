import * as axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/top-headlines',
});