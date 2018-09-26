import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/types';

export default function(state = {}, { type, payload: { data } = {} }) {
    switch (type) {
        case FETCH_POSTS:
            return _.mapKeys(data, "id");
        case FETCH_POST:
            return { ...state, [data.id]: data };
        default:
            return state;
    }
}