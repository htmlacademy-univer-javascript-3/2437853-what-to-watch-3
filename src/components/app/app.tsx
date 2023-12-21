import Main from '../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../common/private-route/private-route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/mylist" element={
        <PrivateRoute>
          <MyList/>
        </PrivateRoute>
      }
      />
      <Route path="/films/:id" element={<Film/>}/>
      <Route path="/films/:id/review" element={<AddReview/>}/>
      <Route path="/player/:id" element={<Player/>}/>
      <Route path="/not-found" element={<NotFound/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>);
}

export default App;
