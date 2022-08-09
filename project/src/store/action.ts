import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';

export const changeCity = createAction<{city: City['name']}>('changeCity');
export const fillOffers = createAction<{cityOffers: Offer[]}>('fillOffers');
export const changeSort = createAction<{sort: string}>('changeSort');
