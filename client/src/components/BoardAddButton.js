
export default function BoardAddButton() {
  const $boardAddButton = document.createElement('div');

  const render = () => {
    $boardAddButton.innerHTML = `
      <button>
      + Add column
      </button>
    `;
    return $boardAddButton;
  };

  return render();
}
