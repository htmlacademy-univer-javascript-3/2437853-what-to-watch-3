import FilmCard from '../../common/film-card/film-card';

function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard
            title="Fantastic Beasts: The Crimes of Grindelwald"
            imgPath="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          />

          <FilmCard
            title="Bohemian Rhapsody"
            imgPath="img/bohemian-rhapsody.jpg"
          />

          <FilmCard
            title="Macbeth"
            imgPath="img/macbeth.jpg"
          />

          <FilmCard
            title="Aviator"
            imgPath="img/aviator.jpg"
          />


          <FilmCard
            title="We need to talk about Kevin"
            imgPath="img/we-need-to-talk-about-kevin.jpg"
          />

          <FilmCard
            title="What We Do in the Shadows"
            imgPath="img/what-we-do-in-the-shadows.jpg"
          />

          <FilmCard
            title="Revenant"
            imgPath="img/revenant.jpg"
          />

          <FilmCard
            title="Johnny English"
            imgPath="img/johnny-english.jpg"
          />


          <FilmCard
            title="Shutter Island"
            imgPath="img/shutter-island.jpg"
          />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
