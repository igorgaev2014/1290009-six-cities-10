import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type AppScreenProps = {
  placesCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({placesCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen offers={offers} reviews={reviews}/>}/>
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
