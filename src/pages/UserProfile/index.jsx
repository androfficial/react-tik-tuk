import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '@components/Preloader';

import { fetchUserProfile, setIsLoaded } from '@redux/actions/userProfile';

import numberFormatting from '@services/numberFormatting';

const UserProfile = () => {
  const { uniqueName } = useParams();
  const dispatch = useDispatch();
  const {
    avatar,
    userName,
    nickName,
    verified,
    bioLink,
    followerCount,
    followingCount,
    heartCount,
    description,
    posts,
  } = useSelector(({ userProfile }) => userProfile.userInfo);
  const isLoaded = useSelector(({ userProfile }) => userProfile.isLoaded);

  useEffect(() => {
    dispatch(fetchUserProfile(uniqueName));
    return function cleanup() {
      dispatch(setIsLoaded(false));
    };
  }, [uniqueName, dispatch]);

  return isLoaded ? (
    <article className='main__user-profile user-profile'>
      <div className='user-profile__top'>
        <div className='user-profile__header'>
          <span className='user-profile__avatar _author-avatar'>
            <img src={avatar} alt={userName} />
          </span>
          <div className='user-profile__titles'>
            <h2 className='user-profile__author-uniqueId _author-uniqueId'>
              {userName}
              {verified && (
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='24' cy='24' r='24' fill='#20D5EC' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z'
                    fill='white'
                  />
                </svg>
              )}
            </h2>
            <h1 className='user-profile__author-nickname _author-nickname'>
              {nickName}
            </h1>
          </div>
        </div>

        <div className='user-profile__footer'>
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

          {description && (
            <div className='user-profile__desc-wrapper'>
              <h2 className='user-profile__desc'>{description}</h2>
            </div>
          )}

          {bioLink && (
            <div className='user-profile__share'>
              <a
                href={bioLink}
                className='user-profile__bio-link'
                target='_blank'
                rel='noreferrer'
              >
                {bioLink}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className='user-profile__bottom'>
        <ul className='user-profile__posts'>
          {posts &&
            posts.map(({ video, views }, i) => (
              <li
                key={`${i}: ${views}`}
                className='user-profile__post post-user'
              >
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  preload='metadata'
                  src={video}
                  className='post-user__video _author-video'
                />
                <div className='post-user__stats'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 48 48'
                    fill='#fff'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16 10.554V37.4459L38.1463 24L16 10.554ZM12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z'
                    />
                  </svg>
                  <strong className='post-user__stats-views'>
                    {numberFormatting(views)}
                  </strong>
                </div>
              </li>
            ))}
        </ul>
        {/* <div className="user-profile__pagination">
          <Pagination />
        </div> */}
      </div>
    </article>
  ) : (
    <Preloader />
  );
};

export default UserProfile;
