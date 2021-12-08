import PropTypes from 'prop-types';

import AuthorInfo from './AuthorInfo';
import AuthorVideo from './AuthorVideo';
import AuthorStats from './AuthorStats';

const Post = ({
  avatar,
  commentsCount,
  hashtags,
  likesCount,
  uniqueName,
  nickName,
  text,
  verified,
  video,
  cover,
}) => (
  <article className='feed__item item-feed'>
    <AuthorInfo
      avatar={avatar}
      hashtags={hashtags}
      uniqueName={uniqueName}
      nickName={nickName}
      text={text}
      verified={verified}
    />
    <div className='item-feed__wrapper'>
      <AuthorVideo cover={cover} video={video} />
      <AuthorStats likesCount={likesCount} commentsCount={commentsCount} />
    </div>
  </article>
);

Post.propTypes = {
  avatar: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  likesCount: PropTypes.number.isRequired,
  uniqueName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  video: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Post;
