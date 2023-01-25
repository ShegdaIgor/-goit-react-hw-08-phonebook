import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
};
