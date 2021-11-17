import { mainAPI } from '@api/api';

export const Types = {
  SET_USER_INFO: 'FEED@SET:USER_INFO',
  SET_ERROR_API: 'FEED@SET:ERROR_API',
};

export const setUserInfo = (payload) => ({
  type: Types.SET_USER_INFO,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const fetchUserProfile = (uniqueName) => async (dispatch) => {
  const response = await mainAPI.getUserInfo(uniqueName);
  response ? dispatch(setUserInfo(response)) : dispatch(setErrorApi(true));
};