import board from '../mockServices/boardService';

export default function BoardAddModal() {
  const boardAddModal = document.createElement('div');
  boardAddModal.classList.add('board_modal', 'hidden');

  boardAddModal.addEventListener('click', (event) => {
    const newColumnTitle = boardAddModal.querySelector('#new_column_title').value;

    if (event.target.id === 'create_column_button') {
      board.addBoard(newColumnTitle);
    }
  });

  const render = () => {
    boardAddModal.innerHTML = `
      Add a column
      <input id='new_column_title'></input>
      <button id='create_column_button'>Create column</button>
    `;
    return boardAddModal;
  };

  return render();
}
