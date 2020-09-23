import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

const routes = [
  { path: '/', page: LoginPage },
  { path: '/main', page: MainPage },
  { path: '/login', page: LoginPage },
];

const router = (currentPath) => {
  const app = document.getElementById('app');

  while (app.hasChildNodes()) {
    app.removeChild(app.firstChild);
  }

  for (const route of routes) {
    if (route.path === currentPath) {
      return app.appendChild(route.page());
    }
  }
  return app.appendChild(ErrorPage());
};

(() => {
  router('/');
})();

export { router };
