import {Link} from 'react-router-dom';
import Film from '../../../types/film';
import {useEffect, useState} from 'react';
import Player from '../player/player';
import {PreviewDelay} from '../../../const';

type FilmCardProps = {
  film: Film;

  selected: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard(props: FilmCardProps) {
  const [waited, setWaited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWaited(true), PreviewDelay);
    return () => clearTimeout(timer);
  });
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={(e) => {
        setWaited(false);
        props.onMouseLeave(e);
      }}
    >
      {props.selected && waited
        ? (
          <Player autoPlay muted videoLink={props.film.videoLink}/>
        )
        : (
          <>
            <div className="small-film-card__image">
              <img src={props.film.backgroundImage} alt={props.film.name} width="280" height="175"/>
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
            </h3>
          </>
        )}

    </article>
  );
}

export default FilmCard;
