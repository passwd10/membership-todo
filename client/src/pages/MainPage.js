import KanbanBoard from '../components/KanbanBoard';

export default function MainPage(parentNode) {
  const $mainPage = document.createElement('div');

  const render = () => {
    $mainPage.appendChild(KanbanBoard($mainPage, 'ToDo'));
    $mainPage.appendChild(KanbanBoard($mainPage, 'Working'));
    $mainPage.appendChild(KanbanBoard($mainPage, 'Done'));

    return parentNode.appendChild($mainPage);
  };

  return render();
}
