import {MouseEventHandler} from 'react';

type ShowMoreButtonProps = {
  onClick: MouseEventHandler;
}

function ShowMoreButton({onClick} : ShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClick}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
