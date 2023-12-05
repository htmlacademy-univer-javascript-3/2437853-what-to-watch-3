import UserBlock from '../../common/user-block/user-block';

function HeadGuest() {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        {/*<img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />*/}
        <img src="img/bg-header.jpg"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <UserBlock/>
      </header>

    </section>
  );
}

export default HeadGuest;
