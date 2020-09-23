import KanbanBoard from '../components/KanbanBoard';
import BoardAddButton from '../components/BoardAddButton';
import LogoutButton from '../components/LogoutButton';
import BoardAddModal from '../components/BoardAddModal';

export default function MainPage() {
  const mainPage = document.createElement('div');

  const render = () => {
    mainPage.appendChild(LogoutButton());
    mainPage.appendChild(KanbanBoard());
    mainPage.appendChild(BoardAddButton());
    mainPage.appendChild(BoardAddModal());
    return mainPage;
  };

  return render();
}
