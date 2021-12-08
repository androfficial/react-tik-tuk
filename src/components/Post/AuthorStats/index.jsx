import PropTypes from 'prop-types';
import numberFormatting from '@services/numberFormatting';

const AuthorStats = ({ likesCount, commentsCount }) => (
  <div className='item-feed__footer'>
    <div className='item-feed__stat item-feed__stat--likes'>
      <div className='item-feed__stat-wrapper'>
        <svg viewBox='0 0 24 24'>
          <path
            d='M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5   C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z'
            id='like'
          />
        </svg>
      </div>
      <strong className='item-feed__stat-count'>
        {numberFormatting(likesCount)}
      </strong>
    </div>
    <div className='item-feed__stat item-feed__stat--comm'>
      <div className='item-feed__stat-wrapper'>
        <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
          <path d='M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z' />
        </svg>
      </div>
      <strong className='item-feed__stat-count'>
        {numberFormatting(commentsCount)}
      </strong>
    </div>
  </div>
);

AuthorStats.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default AuthorStats;
