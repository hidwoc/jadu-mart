import api from "./apiConfig";

export const getAllDishes = async () => {
  try {
    const res = await api.get("/dishes");
    return res.data;
  } catch {
    return false;
  }
};

export const getOneDish = async (id) => {
  try {
    const res = await api.get(`/dishes/${id}`);
    return res.data;
  } catch {
    return false;
  }
};

export const createDish = async (formData) => {
  try {
    const res = await api.post("/dishes", { dish: formData });
    return res.data;
  } catch {
    return false;
  }
};

export const editDish = async (id, formData) => {
  try {
    const res = await api.put(`/dishes/${id}`, { dish: formData });
    return res.data;
  } catch {
    return false;
  }
};

export const deleteDish = async (id) => {
  try {
    const res = await api.delete(`/dishes/${id}`);
    return res.data;
  } catch {
    return false;
  }
};
