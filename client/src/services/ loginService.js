import API_SERVER_URL from './config';

const SIGNIN_URL = `${API_SERVER_URL}/signIn`;
const SIGNOUT_URL = `${API_SERVER_URL}/signOut`;

const signIn = (userId, userPassword) => {
  return fetch(SIGNIN_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId, userPassword: userPassword }),
  }).then((res => res.json()));
};

const signOut = () => {
  return fetch(SIGNOUT_URL, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res => res.json()));
};


export { signIn, signOut };
