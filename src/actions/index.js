import axios from 'axios';
import { ROOT_URL, FETCH_URL, CREATE_URL, API_KEY } from '../constants';
import { FETCH_POST, FETCH_POSTS, CREATE_POST } from './types';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}${FETCH_URL}?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}${CREATE_URL}?key=${API_KEY}`, values).then(callback);

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}${FETCH_URL}/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}