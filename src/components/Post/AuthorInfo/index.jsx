import PropTypes from 'prop-types';

import AuthorAvatar from './AuthorAvatar';
import AuthorName from './AuthorName';
import AuthorDescription from './AuthorDescription';

const AuthorInfo = ({
  avatar,
  hashtags,
  uniqueName,
  nickName,
  text,
  verified,
}) => (
  <div className='item-feed__header'>
    <AuthorAvatar avatar={avatar} uniqueName={uniqueName} />
    <div className='item-feed__author-info'>
      <AuthorName
        uniqueName={uniqueName}
        nickName={nickName}
        verified={verified}
      />
    </div>
    <AuthorDescription text={text} hashtags={hashtags} />
  </div>
);

AuthorInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  uniqueName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default AuthorInfo;
