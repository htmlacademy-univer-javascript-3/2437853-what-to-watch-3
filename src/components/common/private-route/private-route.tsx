import {Navigate} from 'react-router-dom';
import {AuthStatus} from '../../../types/auth-status';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute({children, authStatus}: PrivateRouteProps) {
  if (authStatus === AuthStatus.Pending) {
    return (<Spinner/>);
  } else if (authStatus === AuthStatus.Authorized) {
    return children;
  } else {
    return (<Navigate to={'/login'}/>);
  }
}

export default PrivateRoute;
