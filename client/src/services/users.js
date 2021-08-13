import api from "./apiConfig";

export const login = async (user) => {
  try {
    const res = await api.post("/users/login", { user: user });
    const { token } = res.data;
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data;
  } catch {
    return false
  }
};

export const verify = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const res = await api.get("/users/verify");
      return res.data;
    }
  } catch {
    return false
  }
};

export const logout = async() => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
}
