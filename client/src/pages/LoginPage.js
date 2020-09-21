export default function LoginPage() {
  const $loginPage = document.createElement('div');

  $loginPage.innerHTML = `
      <form id='loginForm'>
        <label for='fid'>아이디</label>
        <input type='text'/>
        <label for='fpassword'>비밀번호</label>
        <input type='password'/>
        <input type='submit' value='로그인'/>
      </form>
    `;

  const $loginForm = $loginPage.querySelector('#loginForm');

  $loginForm.addEventListener('submit', () => {
    console.log('login');
  });

  const render = () => {
    return $loginPage;
  };

  return render();
}
