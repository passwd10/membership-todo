import API_SERVER_URL from './config';

const URL = `${API_SERVER_URL}/signIn`;

const signIn = (userId, userPassword) => {
  return fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId, userPassword: userPassword }),
  }).then((res => res.json()));
};

export { signIn };
