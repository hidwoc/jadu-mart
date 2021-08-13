import api from "./apiConfig"

export const getAllDishes = async () => {
  try {
    const res = await api.get('/dishes')
    return res.data
  } catch {
    return false
  }
}