import KanbanBoard from '../components/KanbanBoard';

export default function MainPage(parentNode) {
  const $mainPage = document.createElement('div');

  const render = () => {
    $mainPage.appendChild(KanbanBoard({ title: 'ToDo' }));
    $mainPage.appendChild(KanbanBoard({ title: 'Working' }));
    $mainPage.appendChild(KanbanBoard({ title: 'Done' }));

    return parentNode.appendChild($mainPage);
  };

  return render();
}
