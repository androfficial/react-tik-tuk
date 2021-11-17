import { combineReducers } from 'redux';

import feed from './feed';
import userProfile from './userProfile';

export default combineReducers({
  feed,
  userProfile,
});