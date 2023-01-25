import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorToken } from 'redux/selectors';

const PublicRoute = () => {
  const token = useSelector(selectorToken);

  return token ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
