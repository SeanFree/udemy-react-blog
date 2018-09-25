import axios from 'axios';
import { ROOT_URL, FETCH_URL, API_KEY } from '../constants';
import { FETCH_POSTS } from './types';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}${FETCH_URL}?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}