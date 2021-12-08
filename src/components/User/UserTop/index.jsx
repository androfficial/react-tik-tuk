import PropTypes from 'prop-types';

import UserInfo from './UserInfo';
import UserStats from './UserStats';
import UserDescription from './UserDescription';
import UserBioLinks from './UserBioLinks';

const UserTop = ({
  avatar,
  userName,
  nickName,
  verified,
  followingCount,
  followerCount,
  heartCount,
  description,
  bioLink,
}) => (
  <div className='user-profile__top'>
    <UserInfo
      avatar={avatar}
      userName={userName}
      nickName={nickName}
      verified={verified}
    />
    <div className='user-profile__footer'>
      <UserStats
        followingCount={followingCount}
        followerCount={followerCount}
        heartCount={heartCount}
      />
      <UserDescription description={description} />
      <UserBioLinks bioLink={bioLink} />
    </div>
  </div>
);

UserTop.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  bioLink: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  heartCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default UserTop;
