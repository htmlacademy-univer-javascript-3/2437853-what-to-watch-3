import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={'/'}>На главную</Link>
    </>
  );
}

export default NotFound;
