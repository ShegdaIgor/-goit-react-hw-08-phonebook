import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/register.thunk';
import Button from '@mui/material/Button';
import { selectorToken } from 'redux/selectors';

function Navigation() {
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  return (
    <div>
      <header className={css.header}>
        <nav>
          {(!token && (
            <>
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
            </>
          )) ||
            ((
              <NavLink
                className={({ isActive }) =>
                  cn(css.NavLink, { [css.active]: isActive })
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            ) && (
              <Button type="button" onClick={() => dispatch(logoutThunk())}>
                Log Out
              </Button>
            ))}
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
