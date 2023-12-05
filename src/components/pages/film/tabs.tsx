import {useState} from 'react';
import FilmOverview from './film-ovewview/film-overview';
import FilmDetails from './film-details/film-details';
import FilmReviews from './film-reviews/film-reviews';
import Film from '../../../types/film';

enum Tabs {
  Overview,
  Details,
  Reviews
}

type FilmTabsProps = {
  film: Film;
}

function FilmTabs({film} : FilmTabsProps) {
  const [selectedTab, setSelectedTab] = useState(Tabs.Overview);

  function getTabStyles(tab: Tabs) {
    const styles = ['film-nav__item'];
    if (selectedTab === tab) {
      styles.push('film-nav__item--active');
    }
    return styles.join(' ');
  }

  function tabContent(tab: Tabs) {
    switch (tab) {
      case Tabs.Overview:
        return (<FilmOverview film={film}/>);
      case Tabs.Details:
        return (<FilmDetails film={film}/>);
      case Tabs.Reviews:
        return (<FilmReviews/>);
    }
  }

  function handleTabClick(tab: Tabs) {
    setSelectedTab(tab);
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={getTabStyles(Tabs.Overview)}>
            <button
              type='button'
              style={{border: 0, background: 'transparent'}}
              className="film-nav__link"
              onClick={() => handleTabClick(Tabs.Overview)}
            >Overview
            </button>
          </li>
          <li className={getTabStyles(Tabs.Details)}>
            <button
              type='button'
              style={{border: 0, background: 'transparent'}}
              className="film-nav__link"
              onClick={() => handleTabClick(Tabs.Details)}
            >Details
            </button>
          </li>
          <li className={getTabStyles(Tabs.Reviews)}>
            <button
              type='button'
              style={{border: 0, background: 'transparent'}}
              className="film-nav__link"
              onClick={() => handleTabClick(Tabs.Reviews)}
            >Reviews
            </button>
          </li>
        </ul>
      </nav>

      {tabContent(selectedTab)}

    </div>
  );
}

export default FilmTabs;
