import { useSelector } from 'react-redux';
import { NotFound } from '@components';

export const withErrorApi = (View) => {
  const AppWrapper = (props) => {
    const errorApi = useSelector(({ feed }) => feed.errorApi);

    return <>{errorApi ? <NotFound /> : <View {...props} />}</>;
  }
  return AppWrapper;
};