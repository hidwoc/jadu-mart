import api from "./apiConfig"

export const addToCart = async(basket, dish) => {
  try {
    const res = await api.post(`/line_items`, {basket_id: basket.id, dish_id: dish.id})
    return res.data
  } catch {
    return false
  }
}