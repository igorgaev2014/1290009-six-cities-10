import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { City, Offer, Offers } from '../types/offers';

export const changeCity = createAction<{city: City['name']}>('changeCity');
export const fillOffers = createAction<{cityOffers: Offer[]}>('fillOffers');
export const changeSort = createAction<{sort: string}>('changeSort');
export const loadOffers = createAction<Offers>('loadOffers');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
export const setError = createAction<string | null>('setError');
