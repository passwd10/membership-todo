import API_SERVER_URL from './config';

const URL = `${API_SERVER_URL}/boards`;

const getBoards = () => {
  return fetch(URL, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res => {
    console.log('res', res);
    return res.json();
  }));
};

const addBoard = (boardTitle) => {
  return fetch(URL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ boardTitle: boardTitle }),
  }).then((res => res.json()));
};

export { getBoards, addBoard };
