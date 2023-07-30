export const BASE_URL = 'https://adchitects-cms.herokuapp.com';

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${endpoint || ''}`, {
    headers: {
      Authorization: 'Basic ' + btoa('adchitects:jsrulezzz'),
    },
  });

  return res.json();
};
