export default function ErrorPage() {
  const $errorPage = document.createElement('h1');

  const render = () => {
    $errorPage.innerHTML = '404 Page';
    return $errorPage;
  };

  return render();
}
