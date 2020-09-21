import { signIn } from '../services/ loginService';

export default function LoginForm() {
  const $loginForm = document.createElement('form');

  const signInEvent = async (e) => {
    e.preventDefault();

    const userId = e.target.querySelector('#userId').value;
    const userPassword = e.target.querySelector('#userPassword').value;
    await signIn(userId, userPassword);
  };

  const render = () => {
    $loginForm.innerHTML = `
      <label for='fid'>아이디</label>
      <input id='userId' type='text'/>
      <label for='fpassword'>비밀번호</label>
      <input id='userPassword' type='password'/>
      <input type='submit' value='로그인'/>`;

    $loginForm.addEventListener('submit', signInEvent);

    return $loginForm;
  };

  return render();
}
