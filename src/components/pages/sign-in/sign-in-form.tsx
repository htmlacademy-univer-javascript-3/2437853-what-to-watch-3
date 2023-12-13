import {fetchFavorite, loginPost} from '../../../store/api-action';
import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../../hooks/use-app-selector';

const emailFilter = new RegExp('\\w+@\\w+\\.(?:com|net|ru|tv|org)');
const passwordFilter = new RegExp('(?=.*[A-Za-z])(?=.*\\d)\\w+');

function validateEmail(email: string) {
  return email.match(emailFilter);
}

function validatePassword(password: string) {
  return password.match(passwordFilter);
}

function SignInForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleFieldChange = (evt: FormEvent<HTMLInputElement>) => {
    const {name, value} = evt.currentTarget;
    switch (name) {
      case 'email':
        if (!validateEmail(value)) {
          setMessage('Please enter a valid email address');
        } else {
          setMessage('');
        }
        break;
      case 'password':
        if (!validatePassword(value)) {
          setMessage('Password should contain at least one letter and one digit');
        } else {
          setMessage('');
        }
        break;
    }
    setFormData({...formData, [name]: value});
  };

  const dispatch = useAppDispatch();

  return (
    <div className="sign-in user-page__content">
      <form
        className="sign-in__form"
        onSubmit={(e) => {
          e.preventDefault();
          const data: { email: string; password: string } = formData;
          if (validateEmail(data.email) && validatePassword(data.password)) {
            dispatch(loginPost(data)).unwrap().then(() => dispatch(fetchFavorite()));
          }
        }}
      >
        {message ? (
          <div className="sign-in__message">
            <p>{message}</p>
          </div>
        ) : null}
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
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
