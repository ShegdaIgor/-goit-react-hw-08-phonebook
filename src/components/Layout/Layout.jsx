import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Layout.module.css';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/register.thunk';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
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
        <button type="button" onClick={() => dispatch(logoutThunk())}>
          Log Out
        </button>
      </header>
      {children}
    </div>
  );
};
