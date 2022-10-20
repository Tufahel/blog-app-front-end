const URL = 'http://127.0.0.1:3000';

const fetchUserData = async () => {
  const res = await fetch(`${URL}/api/users`)
    .then((response) => response.json());
  return res;
};

export default fetchUserData;
