import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const $loginPage = document.createElement('div');

  const render = () => {
    $loginPage.appendChild(LoginForm());
    return $loginPage;
  };

  return render();
}
