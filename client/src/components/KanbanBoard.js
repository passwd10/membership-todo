import KanbanBoardButton from './KanbanBoardButton';

export default function KanbanBoard({ title }) {
  const $kanbanBoard = document.createElement('div');

  const render = () => {
    $kanbanBoard.innerHTML = `${title}`;
    $kanbanBoard.appendChild(KanbanBoardButton({ type: title }));
    return $kanbanBoard;
  };

  return render();
}
