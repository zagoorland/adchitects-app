export const BASE_URL = 'https://adchitects-cms.herokuapp.com';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export const fetchData = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const res = await fetch(`${BASE_URL}/${endpoint || ''}`, {
    headers: {
      Authorization: 'Basic ' + btoa('adchitects:jsrulezzz'),
    },
    ...options,
  });

  const jsonData = await res.json();
  const status = res.status;

  return { data: jsonData, status: status };
};
