import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

const routes = [
  { path: '/', page: LoginPage },
  { path: '/main', page: MainPage },
  { path: '/login', page: LoginPage },
];

const router = (app) => {
  const currentPath = window.location.pathname;

  for (const route of routes) {
    if (route.path === currentPath) {
      return app.appendChild(route.page());
    }
  }
  return app.appendChild(ErrorPage());
};

export { router };
