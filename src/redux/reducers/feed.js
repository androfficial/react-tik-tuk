import { Types } from '@redux/actions/feed';

const initialState = {
  posts: [],
  isLoaded: false,
  errorApi: false,
  // postsCount: null,
  // currentPage: 1,
  // pageSize: 5,
};

const feed = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsCount: action.payload.length,
        isLoaded: true,
        errorApi: false,
      };
    // case Types.SET_CURRENT_PAGE:
    //   return {
    //     ...state,
    //     currentPage: action.payload,
    //   };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default feed;
