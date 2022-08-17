import { AuthStatus } from './../const';
import { Offers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, changeSort, loadOffers, setDataLoadedStatus, setAuthStatus, setError} from './action';


type InitialState = {
  city: string;
  offers: Offers;
  sort: string;
  isLoadingOffer: boolean;
  authStatus: AuthStatus;
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sort: 'Popular',
  isLoadingOffer: true,
  authStatus: AuthStatus.Unknown,
  error: null,
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isLoadingOffer = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
