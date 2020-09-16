import { addTask } from '../services/taskService';

export default function KanbanBoardButton({ type }) {
  const $kanbanBoardButton = document.createElement('button');

  const handleAddButton = async() => {
    await addTask(type);
  };

  const render = () => {
    $kanbanBoardButton.innerHTML = 'Task 추가';
    $kanbanBoardButton.addEventListener('click', () => {
      handleAddButton();
    });
    return $kanbanBoardButton;
  };

  return render();
}
