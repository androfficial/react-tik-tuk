import { Types } from '@redux/actions/userProfile';

const initialState = {
  userInfo: {},
  isLoaded: false,
  errorApi: false,
};

const userProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        isLoaded: true,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default userProfile;
