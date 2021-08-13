import api from "./apiConfig"

export const addToCart = async(dish_id) => {
  try {
    const res = await api.post(`/dishes/${dish_id}/line_items`)
    return res.data
  } catch {
    return false
  }
}