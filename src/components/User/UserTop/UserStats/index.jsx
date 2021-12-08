import PropTypes from 'prop-types';
import numberFormatting from '@services/numberFormatting';

const UserStats = ({ followingCount, followerCount, heartCount }) => (
  <div className='user-profile__stats stats-user'>
    <div className='stats-user__info stats-user__info--following'>
      <strong className='stats-user__count'>
        {numberFormatting(followingCount)}
      </strong>
      <span className='stats-user__desc'>Подписки</span>
    </div>
    <div className='stats-user__info stats-user__info--follower'>
      <strong className='stats-user__count'>
        {numberFormatting(followerCount)}
      </strong>
      <span className='stats-user__desc'>Подписчики</span>
    </div>
    <div className='stats-user__info stats-user__info--likes'>
      <strong className='stats-user__count'>
        {numberFormatting(heartCount)}
      </strong>
      <span className='stats-user__desc'>Лайки</span>
    </div>
  </div>
);

UserStats.propTypes = {
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  heartCount: PropTypes.number.isRequired,
};

export default UserStats;
