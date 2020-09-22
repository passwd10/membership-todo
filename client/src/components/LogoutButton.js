import { signOut } from '../services/ loginService';
import { redirectToHome } from '../utils/window';

export default function LogoutButton() {
  const $logoutButton = document.createElement('button');

  const signOutEvent = async () => {
    const isLogout = await signOut();
    if (isLogout) {
      localStorage.setItem('isLogin', false);
      redirectToHome();
    }
  };

  const render = () => {
    $logoutButton.innerHTML = '로그아웃';
    $logoutButton.addEventListener('click', signOutEvent);
    return $logoutButton;
  };

  return render();
}
