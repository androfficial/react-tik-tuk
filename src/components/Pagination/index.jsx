import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { setCurrentPage } from '@redux/actions/feed';

const Pagination = ({ postsCount, pageSize, currentPage }) => {
  const dispatch = useDispatch();
  const pages = [];
  const totalPages = Math.ceil(postsCount / pageSize);

  for (
    let i = Math.max(currentPage - 3, 1);
    i <= Math.max(1, Math.min(currentPage + 3, totalPages));
    i++
  ) {
    pages.push(i);
  }

  const handleCurrentPage = (page) => {
    console.log(page);
    dispatch(setCurrentPage(page));
  };

  const disablePrevBtn = cn('pagination__btn pagination__btn--prev', {
    _disabled: currentPage === 1,
  });

  const disableNextBtn = cn('pagination__btn pagination__btn--next', {
    _disabled: currentPage === totalPages,
  });

  return (
    <div className="pagination">
      <button type="button" className={disablePrevBtn}>
        <svg viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"></path>
        </svg>
      </button>
      <ul className="pagination__list">
        {pages &&
          pages.map((page) => (
            <li key={page} className="pagination__item">
              <button
                type="button"
                onClick={() => handleCurrentPage(page)}
                className={cn('pagination__link', { _selected: currentPage === page })}>
                {page}
              </button>
            </li>
          ))}
      </ul>
      <button type="button" className={disableNextBtn}>
        <svg viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"></path>
        </svg>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  postsCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;