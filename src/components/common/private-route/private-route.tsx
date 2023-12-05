import {Navigate} from 'react-router-dom';
import {getToken} from '../../../api/token';

type PrivateRouteProps = {
  children : JSX.Element;
}

function PrivateRoute({children} : PrivateRouteProps){
  const authorized = getToken();
  return authorized ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;
