import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

(() => {
  const $app = document.getElementById('app');

  localStorage.getItem('isLogin') === 'true' ?
    $app.appendChild(MainPage()) : $app.appendChild(LoginPage());
})();
