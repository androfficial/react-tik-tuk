/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import UserTop from './UserTop';
import UserBottom from './UserBottom';

const User = ({ posts, ...obj }) => (
  <article className='main__user-profile user-profile'>
    <UserTop {...obj} />
    <UserBottom posts={posts} />
  </article>
);

User.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default User;
