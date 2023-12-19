import Comment from '../../../../types/comment';
import {useAppSelector} from '../../../../hooks/use-app-selector';
import {selectComments} from '../../../../store/film/film-store.selectors';

type ReviewCardProps = {
  review: Comment;
}

function formatDate(date: Date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  } as const;
  return date.toLocaleDateString('en-US', options);
}

function ReviewCard({review}: ReviewCardProps) {
  return (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={review.date.toString()}>{formatDate(new Date(review.date))}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>);
}

function FilmReviews() {
  const comments = useAppSelector(selectComments);
  const comments1 = comments.slice(0, comments.length / 2 + 1);
  const comments2 = comments.slice(comments.length / 2 + 1);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments1.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments2.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
