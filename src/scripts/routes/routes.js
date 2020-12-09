import RestoHome from '../views/pages/resto-home';
import RestoFavorite from '../views/pages/resto-favorite';
import RestoDetail from '../views/pages/resto-detail';

const routes = {
  '/': RestoHome, // default page
  '/home': RestoHome,
  '/favorite': RestoFavorite,
  '/detail/:id': RestoDetail,
};

export default routes;
