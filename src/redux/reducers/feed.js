import { Types } from '@redux/actions/feed';

let initialState = {
  posts: [],
  postsCount: null,
  currentPage: 1,
  pageSize: 5,
  errorApi: false,
};

const feed = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsCount: action.payload.length,
      };
    case Types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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