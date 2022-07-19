import CitiesCard from '../../components/cities-card/cities-card';
import { Offers } from '../../types/offers';

type CitiesCardListProps = {
  offers: Offers;
}

function CitiesCardList({offers}: CitiesCardListProps): JSX.Element {
  return <CitiesCard />;
}

export default CitiesCardList;
