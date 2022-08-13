import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import LoadingLayout from '../loading-layout/loading-layout';

type AppScreenProps = {
  placesCount: number;
  reviews: Reviews;
}

function App({placesCount, reviews}: AppScreenProps): JSX.Element {
  const isDataLoading = useAppSelector((state) => state.isLoading);

  if (isDataLoading) {
    return (
      <LoadingLayout />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen reviews={reviews}/>}/>
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
