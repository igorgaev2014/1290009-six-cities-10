import CitiesCard from '../../components/cities-card/cities-card';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type CitiesCardListProps = {
  offers: Offers;
}

function CitiesCardList({offers}: CitiesCardListProps): JSX.Element {
  const [, onActiveCardId] = useState<number>();
  return (
    <>
      {offers.map((offer) =>
        <CitiesCard key={offer.id} offer={offer} onMouseOver={() => onActiveCardId(offer.id)}/>)}
    </>
  );
}

export default CitiesCardList;
