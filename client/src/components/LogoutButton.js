import { signOut } from '../services/ loginService';

export default function LogoutButton() {
  const $logoutButton = document.createElement('button');

  const signOutEvent = async () => {
    const isLogout = await signOut();
    if (isLogout) {
      window.location.href = '/login';
    }
  };

  const render = () => {
    $logoutButton.innerHTML = '로그아웃';
    $logoutButton.addEventListener('click', signOutEvent);
    return $logoutButton;
  };

  return render();
}
