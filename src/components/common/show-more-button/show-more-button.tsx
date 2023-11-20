import {useDispatch} from 'react-redux';
import {setFilmsCount} from '../../../store/action';
import {useAppSelector} from '../../../hooks/use-app-selector';

function ShowMoreButton() {
  const dispatch = useDispatch();
  const filmsCount = useAppSelector((state) => state.filmsCount);
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(setFilmsCount(filmsCount + 8))}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
