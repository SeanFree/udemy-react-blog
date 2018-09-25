import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import PostsReducer from './postsReducer';

const RootReducer = combineReducers({
	posts: PostsReducer,
	form: FormReducer
});

export default RootReducer;
