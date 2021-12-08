/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import User from '@components/User';
import Preloader from '@components/Preloader';

import { fetchUserProfile, setIsLoaded } from '@redux/actions/userProfile';

const UserProfile = () => {
  const { uniqueName } = useParams();
  const dispatch = useDispatch();
  const [userInfo, isLoaded] = useSelector(({ userProfile }) => [
    userProfile.userInfo,
    userProfile.isLoaded,
  ]);

  useEffect(() => {
    dispatch(fetchUserProfile(uniqueName));
    return () => dispatch(setIsLoaded(false));
  }, [uniqueName, dispatch]);

  return isLoaded ? <User {...userInfo} /> : <Preloader />;
};

export default UserProfile;
