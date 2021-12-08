import mainAPI from '@api/api';

export const Types = {
  SET_POSTS: 'FEED@SET:POSTS',
  SET_ERROR_API: 'FEED@SET:ERROR_API',
  SET_IS_LOADED: 'FEED@SET:IS_LOADED',
  // SET_CURRENT_PAGE: 'FEED@SET:CURRENT_PAGE',
};

export const setPosts = (payload) => ({
  type: Types.SET_POSTS,
  payload,
});

export const setIsLoaded = (payload) => ({
  type: Types.SET_IS_LOADED,
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
  if (response) {
    dispatch(setPosts(response));
  } else {
    dispatch(setErrorApi(true));
  }
};
