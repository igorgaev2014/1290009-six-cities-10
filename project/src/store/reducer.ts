import { offers } from './../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
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
    });
});

export {reducer};
