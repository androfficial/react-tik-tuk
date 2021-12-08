import mainAPI from '@api/api';

export const Types = {
  SET_USER_INFO: 'USER_PROFILE@SET:USER_INFO',
  SET_ERROR_API: 'USER_PROFILE@SET:ERROR_API',
  SET_IS_LOADED: 'USER_PROFILE@SET:IS_LOADED',
};

export const setUserInfo = (payload) => ({
  type: Types.SET_USER_INFO,
  payload,
});

export const setIsLoaded = (payload) => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const fetchUserProfile = (uniqueName) => async (dispatch) => {
  const response = await mainAPI.getUserInfo(uniqueName);
  if (response) {
    dispatch(setUserInfo(response));
  } else {
    dispatch(setErrorApi(true));
  }
};
