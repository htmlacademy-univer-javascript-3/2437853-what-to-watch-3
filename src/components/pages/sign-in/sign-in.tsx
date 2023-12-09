import {Link, Navigate} from 'react-router-dom';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {AuthStatus} from '../../../types/auth-status';
import SignInForm from './sign-in-form';

function SignIn() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return authStatus === AuthStatus.Authorized
    ? (<Navigate to='/'/>)
    : (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <SignInForm/>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2023 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
}

export default SignIn;
