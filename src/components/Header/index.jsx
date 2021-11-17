import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import Logo from '@assets/images/logo.svg';

const Header = () => {
  const activeNavLink = ({ isActive }) => cn('menu__link _nav-link', isActive && '_active');

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__content">
          <div className="header__logo logo">
            <Link to="/feed" className="logo__link">
              <img src={Logo} alt="Лого" />
            </Link>
          </div>
          <div className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink to="/feed" className={activeNavLink}>
                  Feed
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;