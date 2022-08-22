import { Reviews } from './../types/reviews';
import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { City, Offer, Offers } from '../types/offers';
import { AppRoute } from '../const';

export const changeCity = createAction<{city: City['name']}>('changeCity');
export const fillOffers = createAction<{cityOffers: Offer[]}>('fillOffers');
export const changeSort = createAction<{sort: string}>('changeSort');
export const loadOffers = createAction<Offers>('loadOffers');
export const setOffer = createAction('setOffer', (value) => ({payload: value}));
export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
export const setError = createAction<string | null>('setError');
export const setUserInfo = createAction<string | null>('setUserInfo');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setOffersNearby = createAction<Offers>('setOffersNearby');
export const setOfferReviews = createAction<Reviews>('setOfferReviews');
