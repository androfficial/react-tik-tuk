import PropTypes from 'prop-types';

const AuthorDescription = ({ text, hashtags }) => (
  <div className='item-feed__author-description'>
    {text && <strong className='item-feed__text'>{text}</strong>}
    {hashtags &&
      hashtags.map((el, i) => (
        <span key={`${el}_${i}`} className='item-feed__hashtag-spn'>
          <strong className='item-feed__hashtag-str'>{el}</strong>
        </span>
      ))}
  </div>
);

AuthorDescription.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthorDescription;
