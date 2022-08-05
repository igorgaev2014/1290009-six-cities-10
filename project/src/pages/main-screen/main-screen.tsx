import CitiesCardList from '../../components/cities-card-list/cities-card-list';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute, CITY_NAMES, SortType } from '../../const';
import Map from '../../components/map/map';
import { useState } from 'react';
import {useAppSelector} from '../../hooks';
import CityButton from '../../components/city-button/city-button';
import { changeCity } from '../../store/action';
import {useAppDispatch} from '../../hooks';
import SortList from '../../components/sort-list/sort-list';

function MainScreen(): JSX.Element {
  const stateCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const filteredOffers = offers.filter((offer) => offer.city.name === stateCity);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const [showSortList, setShowSortList] = useState(false);
  const sort = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const sortOffers = (sortType: string) => {
    switch (sortType) {
      case SortType.Rated:
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      case SortType.PriceHighToLow:
        return filteredOffers.sort((a, b) => b.price - a.price);
      case SortType.PriceLowToHigh:
        return filteredOffers.sort((a, b) => a.price - b.price);
      default:
        return filteredOffers;
    }
  };
  sortOffers(sort);

  const handleOfferHover = (hoveredOffer: Offer | null) => {
    const currentOffer = filteredOffers.find((offer) => offer.id === hoveredOffer?.id);
    setSelectedOffer(currentOffer);
  };

  const handleChangeCity = (city: string) => {
    dispatch(changeCity({city}));
  };

  const onSortListHandler = () => {
    setShowSortList(!showSortList);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={`${AppRoute.Favorites}`} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITY_NAMES.map((city) => (
                <CityButton
                  city={city} key={city} isActive={city === stateCity}
                  onChangeCity={handleChangeCity}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {stateCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by&nbsp;</span>
                <span className="places__sorting-type" tabIndex={0} onClick={onSortListHandler}>&nbsp;{sort}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {showSortList ? <SortList onCloseList={onSortListHandler} /> : null}
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardList offers={filteredOffers} onOfferHover={handleOfferHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={filteredOffers} selectedOffer={selectedOffer} />
              </section>;
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
