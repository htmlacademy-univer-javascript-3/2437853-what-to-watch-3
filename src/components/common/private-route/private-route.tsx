import {Navigate} from 'react-router-dom';
import {AuthStatus} from '../../../types/auth-status';

type PrivateRouteProps = {
  children : JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute({children, authStatus} : PrivateRouteProps){
  return authStatus === AuthStatus.Authorized ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;
