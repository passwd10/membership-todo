export default function MainPage(parentNode) {
  const $mainPage = document.createElement('div');

  const render = () => {
    $mainPage.innerHTML = `
      메인페이지 입니다
      <button>버튼</button>
    `;
    parentNode.appendChild($mainPage);
  };

  return render();
}
