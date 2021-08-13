import api from "./apiConfig"

export const addToCart = async(lineItem) => {
  try {
    const res = await api.post(`/line_items`, {line_item: lineItem})
    return res.data
  } catch {
    return false
  }
}