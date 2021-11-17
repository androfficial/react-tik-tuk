import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '@components';
import { fetchPosts } from '@redux/actions/feed';

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ feed }) => feed.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="main__feed feed">
        <div className="feed__top">
          <h1 className="feed__title _title">Trending Feed</h1>
        </div>
        <div className="feed__items">
          <div className="feed__items-list">
            {posts && posts.map((obj, i) => <Post key={i} {...obj} />)}
          </div>
          {/* <div className="feed__pagination">
            <Pagination postsCount={postsCount} currentPage={currentPage} pageSize={pageSize} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Feed;