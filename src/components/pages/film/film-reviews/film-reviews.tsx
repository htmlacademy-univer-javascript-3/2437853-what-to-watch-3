import Film from '../../../../types/film';
import reviews from '../../../../mocks/reviews';
import Review from '../../../../types/review';

type ReviewCardProps = {
  review: Review;
}

type FilmProps = {
  film: Film;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviews(film: Film) {
  return reviews;
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
          <time className="review__date" dateTime={review.date.toString()}>{formatDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>);
}

function FilmReviews({film}: FilmProps) {
  const reviewsList = getReviews(film);
  const reviewsCol1 = reviewsList.slice(0, reviewsList.length / 2);
  const reviewsCol2 = reviewsList.slice(reviewsList.length / 2);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsCol1.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviewsCol2.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
