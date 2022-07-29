import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CitiesCardList from '../../components/cities-card-list/cities-card-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';

type RoomScreenProps = {
  offers: Offer[];
  reviews: Reviews;
}

function RoomScreen({offers, reviews}: RoomScreenProps): JSX.Element {
  const { id } = useParams();
  const currentOffer = offers.filter((offer) => offer.id === Number(id));

  if (!currentOffer[0]) {
    return <NotFoundScreen />;
  }

  const nearOffers = offers.filter((offer) => offer.id !== Number(id));

  const { title, price, rating, type, bedrooms, maxAdults, goods, host, description, images, isPremium } = currentOffer[0];
  const { name, isPro, avatarUrl } = host;
  const propertyItems = goods.map((good) => <li key={good.toString()} className="property__inside-item">{good}</li>);
  const propertyImages = images.map((image) => (
    <div key={image.toString()} className="property__image-wrapper">
      <img className="property__image" src={image} alt="studio" />
    </div>
  )
  );

  return (
    <div className="page">
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {propertyImages}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {isPremium && <span>Premium</span>}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.floor(rating * 100 / 5)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {propertyItems}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    {isPro && <span>Pro</span>}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} selectedOffer={currentOffer[0]}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CitiesCardList offers={nearOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
