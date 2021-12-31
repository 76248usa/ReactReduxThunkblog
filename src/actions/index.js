import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


//export const fetchPosts = () => {

	 //return async (dispatch)  => {

	 //const response = await jsonPlaceholder.get('https://jsonplaceholder.typicode.com/posts');
	 //const response = await axios.create('https://jsonplaceholder.typicode.com/posts');

	 //dispatch({ type: 'FETCH_POSTS', payload: response});
	
	//};
//};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

	await dispatch(fetchPosts());
	//console.log(getState().posts);
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	//console.log(userIds);
	userIds.forEach(id => dispatch(fetchUser(id)));

};



export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data});
};



export const fetchUser = id => async dispatch => {

	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data});

};






















































