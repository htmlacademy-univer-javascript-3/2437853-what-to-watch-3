import {useAppDispatch, useAppSelector} from '../../../../hooks/use-app-selector';
import {selectFavoriteCount} from '../../../../store/favorite/favorite-store.selectors';
import {changeFavorite} from '../../../../store/api-action';
import {selectAuthStatus} from '../../../../store/user/user-store.selectors';
import {AuthStatus} from '../../../../types/auth-status';
import {useNavigate} from 'react-router-dom';

type MyListButtonProps = {
  filmId: string;
  isFavorite: boolean;
  onClickAfter?: (toggle: boolean) => void;
}

function MyListButton({filmId, isFavorite, onClickAfter}: MyListButtonProps) {
  const favoriteCount = useAppSelector(selectFavoriteCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(selectAuthStatus);

  const handleClick = () => {
    if (authStatus !== AuthStatus.Authorized) {
      navigate('/login');
    }
    dispatch(changeFavorite({filmId, status: isFavorite ? 0 : 1}));
    if (onClickAfter) {
      onClickAfter(isFavorite);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      <svg viewBox="0 0 19 20" width="19" height="20" data-testid={isFavorite ? 'in-list' : 'add'}>
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteCount}</span>
    </button>
  );
}

export default MyListButton;
