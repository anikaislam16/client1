const BASE_URL = process.env.REACT_APP_API_BASE_URL;



export const login = async (data) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return response.json();
};

export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};

export const checkSession = async () => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result.success;
};
