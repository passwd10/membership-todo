export default function KanbanBoard(parentNode, props) {
  const $kanbanBoard = document.createElement('div');
  const title = props;

  const render = () => {
    $kanbanBoard.innerHTML = `
      ${title}
      <button>버튼</button>
    `;
    return parentNode.appendChild($kanbanBoard);
  };

  return render();
}
