import {useAppDispatch, useAppSelector} from '../../../hooks/use-app-selector';
import {AuthStatus} from '../../../types/auth-status';
import {Link} from 'react-router-dom';
import {setAuthStatus, setUser} from '../../../store/action';
import {removeToken} from '../../../api/token';

function UserBlock() {
  const status = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();
  return status === AuthStatus.Authorized ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <button
          className="user-block__link"
          style={{
            background: 'transparent',
            border: 'none'
          }}
          onClick={() => {
            dispatch(setAuthStatus(AuthStatus.NoAuthorized));
            dispatch(setUser(null));
            removeToken();
          }}
        >Sign out
        </button>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link to={'/login'} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlock;
