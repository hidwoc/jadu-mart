import api from "./apiConfig"

export const getBasket = async() => {
  try {
    const res = await api.get('/baskets')
    return res.data
  } catch {
    return null
  }
}