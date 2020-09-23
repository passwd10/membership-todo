import { signOut } from '../services/ loginService';
import { router } from '../app';

export default function LogoutButton() {
  const $logoutButton = document.createElement('button');

  const signOutEvent = async () => {
    const isLogout = await signOut();
    if (isLogout) {
      router('/login');
    }
  };

  const render = () => {
    $logoutButton.innerHTML = '로그아웃';
    $logoutButton.addEventListener('click', signOutEvent);
    return $logoutButton;
  };

  return render();
}
