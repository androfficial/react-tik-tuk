import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorAvatar = ({ avatar, uniqueName }) => (
  <Link to={`/@${uniqueName}`} className='item-feed__avatar _author-avatar'>
    <img src={avatar} alt={uniqueName} />
  </Link>
);

AuthorAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  uniqueName: PropTypes.string.isRequired,
};

export default AuthorAvatar;
