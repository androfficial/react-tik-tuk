import { Link } from 'react-router-dom';

import NotFoundImg from '@assets/images/NotFound/not-found.svg';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__body">
        <img src={NotFoundImg} alt="Not Found" />
        <p className="not-found__desc">Страница не найдена</p>
        <p className="not-found__recommend-desc">Еще больше актуальных видео ждут вас TikTuk</p>
        <Link to="/feed" className="not-found__link _nav-link">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"></path>
          </svg>
          Смотреть
        </Link>
      </div>
    </div>
  );
};

export default NotFound;