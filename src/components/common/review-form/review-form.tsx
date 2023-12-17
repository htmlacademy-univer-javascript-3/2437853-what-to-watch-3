import {useState} from 'react';
import {useAppDispatch} from '../../../hooks/use-app-selector';
import {commentPost} from '../../../store/api-action';
import {useNavigate} from 'react-router-dom';

type RatingStarProps = {
  state: { rating: number; comment: string };
  setState: React.Dispatch<React.SetStateAction<{ rating: number; comment: string }>>;
  score: number;
}

function RatingStar(props: RatingStarProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${props.score}`}
        type="radio"
        name="rating"
        checked={props.score === props.state.rating}
        onChange={() => {
          props.setState({
            ...props.state,
            rating: props.score
          });
        }}
      />
      <label className="rating__label" htmlFor={`star-${props.score}`}>Rating {props.score}</label>
    </>
  );
}

type ReviewFormProps = {
  filmId: string;
};

function ReviewForm({filmId}: ReviewFormProps) {
  const [state, setState] = useState({rating: 0, comment: ''});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  return (
    <div className="add-review" data-testid="form">
      {message ? (<p>{message}</p>) : null}
      <form
        className="add-review__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (state.rating > 0 && state.comment.length >= 50 && state.comment.length <= 400) {
            dispatch(commentPost({filmId, commentRequest: state}))
              .unwrap()
              .then(() => navigate(`/films/${filmId}`));
          }
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            <RatingStar state={state} setState={setState} score={10}/>
            <RatingStar state={state} setState={setState} score={9}/>
            <RatingStar state={state} setState={setState} score={8}/>
            <RatingStar state={state} setState={setState} score={7}/>
            <RatingStar state={state} setState={setState} score={6}/>
            <RatingStar state={state} setState={setState} score={5}/>
            <RatingStar state={state} setState={setState} score={4}/>
            <RatingStar state={state} setState={setState} score={3}/>
            <RatingStar state={state} setState={setState} score={2}/>
            <RatingStar state={state} setState={setState} score={1}/>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={state.comment}
            onChange={(e) => {
              if (e.target.value.length < 50 && e.target.value.length > 400) {
                setMessage('Comment should contain between 50 and 400 characters');
              } else {
                setMessage('');
              }
              setState({
                ...state,
                comment: e.target.value
              });
            }}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
