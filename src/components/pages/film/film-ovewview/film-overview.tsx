import Film from '../../../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function getRatingDescription(rating: number) {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very Good';
  }
  return 'Awesome';
}

function FilmOverview({film}: FilmOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {film.description.split('\n').map((par, i) => (<p key={`${i}`}>{par}</p>))}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.slice(0, 4).join(', ')} and
            other
          </strong>
        </p>
      </div>
    </>);
}

export default FilmOverview;
