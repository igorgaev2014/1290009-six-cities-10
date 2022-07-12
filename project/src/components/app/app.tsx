import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesCount={placesCount}/>}></Route>
        <Route path={AppRoute.Login} element={<LoginScreen/>}></Route>
        <Route path={AppRoute.Favorites} element={<FavoritesScreen/>}></Route>
        <Route path={AppRoute.Room} element={<RoomScreen/>}></Route>
        <Route path="*" element={<NotFoundScreen/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
