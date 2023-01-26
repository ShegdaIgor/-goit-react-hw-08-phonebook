import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/register.thunk';
import { selectorToken } from 'redux/selectors';
import { Tabs, TabList, Tab, Button } from '@chakra-ui/react';

function Navigation() {
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <Tabs spacing="25px" bgColor={'orange'}>
          <TabList>
            {(!token && (
              <>
                <Tab>
                  <NavLink
                    className={({ isActive }) =>
                      cn(css.NavLink, { [css.active]: isActive })
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </Tab>
                <Tab>
                  <NavLink
                    className={({ isActive }) =>
                      cn(css.NavLink, { [css.active]: isActive })
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Tab>
              </>
            )) ||
              ((
                <Tab>
                  <NavLink
                    className={({ isActive }) =>
                      cn(css.NavLink, { [css.active]: isActive })
                    }
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </Tab>
              ) && (
                <Button
                  type="button"
                  colorScheme="teal"
                  variant="ghost"
                  onClick={() => dispatch(logoutThunk())}
                >
                  Log Out
                </Button>
              ))}
          </TabList>
        </Tabs>
      </nav>
    </header>
  );
}

export default Navigation;
