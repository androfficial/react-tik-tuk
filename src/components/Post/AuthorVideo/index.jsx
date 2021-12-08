import PropTypes from 'prop-types';

const AuthorVideo = ({ cover, video }) => (
  <div className='item-feed__body'>
    <video
      autoPlay
      muted
      loop
      controls
      playsInline
      preload='metadata'
      poster={cover}
      src={video}
      className='item-feed__author-video _author-video'
    />
  </div>
);

AuthorVideo.propTypes = {
  video: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default AuthorVideo;
