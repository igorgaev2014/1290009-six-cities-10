import { Offers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, changeSort, loadOffers, setDataLoadStatus} from './action';

type InitialState = {
  city: string;
  offers: Offers;
  sort: string;
  isLoading: boolean;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sort: 'Popular',
  isLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(fillOffers, (state, action) => {
      const {cityOffers} = action.payload;
      state.offers = cityOffers;
    })
    .addCase(changeSort, (state, action) => {
      const {sort} = action.payload;
      state.sort = sort;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export {reducer};
