export default function BoardAddButton() {
  const boardAddButton = document.createElement('div');

  boardAddButton.addEventListener('click', () => {
    const boardModal = document.querySelector('.board_modal');
    boardModal.classList.remove('hidden');
  });

  const render = () => {
    boardAddButton.innerHTML = `
      <button>
      + Add column
      </button>
    `;
    return boardAddButton;
  };

  return render();
}
