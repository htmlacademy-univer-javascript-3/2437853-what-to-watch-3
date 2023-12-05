import {Link, Navigate} from 'react-router-dom';
import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-app-selector';
import {loginPost} from '../../../store/api-action';
import {AuthStatus} from '../../../types/auth-status';

function SignIn() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFieldChange = (evt: FormEvent<HTMLInputElement>) => {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  };

  const dispatch = useAppDispatch();

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

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input" type="email"
                  placeholder="Email address" name="email" id="user-email"
                  onChange={handleFieldChange}
                  value={formData.email}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input" type="password"
                  placeholder="Password" name="password" id="user-password"
                  onChange={handleFieldChange}
                  value={formData.password}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="button"
                onClick={() => {
                  dispatch(loginPost(formData));
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

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
