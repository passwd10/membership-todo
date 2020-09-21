import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

(() => {
  const $app = document.getElementById('app');
  $app.appendChild(MainPage());
  $app.appendChild(LoginPage());
})();
