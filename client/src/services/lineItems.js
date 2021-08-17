import api from "./apiConfig";

export const removeFromBasket = async (id) => {
  try {
    const res = await api.delete(`/line_items/${id}`);
    return res.data;
  } catch {
    return false;
  }
};

export const addQuantity = async (id) => {
  try {
    const res = await api.put(`/line_items/${id}/add`);
    return res.data;
  } catch {
    return false;
  }
}

export const reduceQuantity = async (id) => {
  try {
    const res = await api.put(`/line_items/${id}/reduce`);
    return res.data;
  } catch {
    return false;
  }
}

// export const subtotal = async(id) => {
//   try {
//     const res = await api
//   }
// }

export const updateLineItem = async(id, quantity) => {
  try {
    console.log(quantity)
    const res = await api.put(`/line_items/${id}`, {line_item: quantity})
    return res.data
  } catch {
    return false
  }
}