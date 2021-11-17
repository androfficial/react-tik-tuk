import { Types } from '@redux/actions/userProfile';

let initialState = {
  userInfo: {},
  errorApi: false,
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userProfile;