import {useFilm} from '../../../hooks/use-film';
import NotFound from '../not-found/not-found';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Player() {
  const {film} = useFilm();
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [state, setState] = useState({
    isPlaying: false,
    elapsed: 0,
  });

  const handlePlay = () => {
    if (state.isPlaying) {
      videoRef.current?.pause();
      setState({...state, isPlaying: false});
    } else {
      videoRef.current?.play();
      setState({...state, isPlaying: true});
    }
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const toTimeLabel = (seconds: number) => {
    const pad = (i: number) => (`00${i.toString()}`).slice(-2);
    const hour = Math.floor(seconds / 60 / 60);
    const min = Math.floor(seconds / 60 % 60);
    const sec = Math.floor(seconds % 60);
    return hour === 0
      ? `-${pad(min)}:${pad(sec)}`
      : `-${hour}:${pad(min)}:${pad(sec)}`;
  };

  const duration = videoRef.current?.duration ?? 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.isPlaying || state.elapsed >= duration) {
        setState({...state, elapsed: videoRef.current?.currentTime ?? 0});
      }
    }, 500);
    return () => clearInterval(interval);
  }, [state.isPlaying]);

  if (!film) {
    return <NotFound/>;
  }
  return (
    <div className="player" data-testid="player">
      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.posterImage}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(`/films/${film?.id}`)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={state.elapsed}
              max={duration}
            >
            </progress>
          </div>
          <div className="player__time-value">{toTimeLabel(duration - state.elapsed)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlay}>
            {state.isPlaying
              ? (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>)
              : (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>)}

          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
