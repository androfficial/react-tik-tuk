import { mainAPI } from '@api/api';

export const Types = {
  SET_POSTS: 'FEED@SET:POSTS',
  SET_ERROR_API: 'FEED@SET:ERROR_API',
  // SET_CURRENT_PAGE: 'FEED@SET:CURRENT_PAGE',
};

export const setPosts = (payload) => ({
  type: Types.SET_POSTS,
  payload,
});

// export const setCurrentPage = (payload) => ({
//   type: Types.SET_CURRENT_PAGE,
//   payload,
// });

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const fetchPosts = (page) => async (dispatch) => {
  const response = await mainAPI.getPosts(page);
  response ? dispatch(setPosts(response)) : dispatch(setErrorApi(true));
};