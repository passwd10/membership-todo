import BoardAddButton from '../components/BoardAddButton';
import LogoutButton from '../components/LogoutButton';

export default function MainPage() {
  const $mainPage = document.createElement('div');

  const render = () => {
    $mainPage.appendChild(LogoutButton());
    $mainPage.appendChild(BoardAddButton());
    return $mainPage;
  };

  return render();
}
