import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {selectAuthStatus} from '../../../store/user/user-store.selectors';
import {AuthStatus} from '../../../types/auth-status';

type PrivateRouteProps = {
  children : JSX.Element;
}

function PrivateRoute({children} : PrivateRouteProps){
  const authorized = useAppSelector(selectAuthStatus);
  return authorized === AuthStatus.Authorized ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;
