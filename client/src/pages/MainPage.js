import BoardAddButton from '../components/BoardAddButton';

export default function MainPage() {
  const $mainPage = document.createElement('div');

  const render = () => {
    $mainPage.appendChild(BoardAddButton());
    return $mainPage;
  };

  return render();
}
