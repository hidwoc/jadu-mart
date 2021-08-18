import api from "./apiConfig";

export const removeFromBasket = async (id) => {
  try {
    const res = await api.delete(`/line_items/${id}`);
    return res.data;
  } catch {
    return false;
  }
};

export const updateLineItem = async(id, quantity) => {
  try {
    const res = await api.put(`/line_items/${id}`, {line_item: quantity})
    return res.data
  } catch {
    return false
  }
}