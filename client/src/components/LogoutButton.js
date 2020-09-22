import { signOut } from '../services/ loginService';

export default function LogoutButton() {
  const $logoutButton = document.createElement('button');

  const signOutEvent = async () => {
    await signOut();
  };

  const render = () => {
    $logoutButton.innerHTML = '로그아웃';
    $logoutButton.addEventListener('click', signOutEvent);
    return $logoutButton;
  };

  return render();
}
