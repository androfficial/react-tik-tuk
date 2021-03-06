/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Preloader } from '@components';
import { setIsLoaded, fetchPosts } from '@redux/actions/feed';

const Feed = () => {
  const dispatch = useDispatch();
  const [posts, isLoaded] = useSelector(({ feed }) => [
    feed.posts,
    feed.isLoaded,
  ]);

  useEffect(() => {
    dispatch(fetchPosts());
    return () => dispatch(setIsLoaded(false));
  }, [dispatch]);

  return (
    <div className='main__feed feed'>
      <div className='feed__top'>
        <h1 className='feed__title _title'>Trending Feed</h1>
      </div>
      <div className='feed__items'>
        <div className='feed__items-list'>
          {isLoaded ? (
            posts.map((obj, i) => <Post key={i} {...obj} />)
          ) : (
            <Preloader />
          )}
        </div>
        {/* <div className="feed__pagination">
            <Pagination postsCount={postsCount} currentPage={currentPage} pageSize={pageSize} />
          </div> */}
      </div>
    </div>
  );
};

export default Feed;
