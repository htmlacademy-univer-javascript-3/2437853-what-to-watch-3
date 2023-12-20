import {Link} from 'react-router-dom';
import {FilmShort} from '../../../types/film';
import {useEffect, useState} from 'react';
import Player from '../player/player';
import {PREVIEW_DELAY} from '../../../const';

type FilmCardProps = {
  film: FilmShort;
}

function FilmCard(props: FilmCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setShowPreview(true), PREVIEW_DELAY);
      return () => clearTimeout(timer);
    } else {
      setShowPreview(false);
    }
  }, [showPreview, isHovered]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && showPreview
        ? (
          <Player autoPlay muted videoLink={props.film.previewVideoLink}/>
        )
        : (
          <>
            <div className="small-film-card__image">
              <img src={props.film.previewImage} alt={props.film.name} width="280" height="175"/>
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
