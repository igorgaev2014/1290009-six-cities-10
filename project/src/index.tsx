import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { reviews } from './mocks/reviews';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOfferAction());

const Setting = {
  PLACES_COUNT: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCount = {Setting.PLACES_COUNT}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
