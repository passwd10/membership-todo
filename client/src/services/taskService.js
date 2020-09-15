import API_SERVER_URL from './config';

const URL = `${API_SERVER_URL}/task`;

const addTask = (taskState) => {
  return fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskState),
  }).then((res => res.json()));
};

export { addTask };
