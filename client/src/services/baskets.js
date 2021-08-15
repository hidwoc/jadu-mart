import api from "./apiConfig"

export const getBasket = async(basketID) => {
  try {
    const res = await api.get(`/baskets/${basketID}`)
    return res.data
  } catch {
    return null
  }
}

export const createBasket = async() => {
  try {
    const res = await api.post('/baskets')
    return res.data
  } catch {
    return null
  }
}

export const addToBasket = async(basketID, dishID) => {
  try {
    const res = await api.put(`/baskets/${basketID}/add`, {line_item: {dish_id: dishID}})
    return res.data
  } catch {
    return null
  }
}

// TODO: return null either way to setBasket(null)?
export const deleteBasket = async(basketID) => {
  try {
    const res = await api.destroy(`/baskets/${basketID}`)
    return res.data
  } catch {
    return null
  }
}

export const placeOrder = async(basketID) => {
  try {
    const res = await api.delete(`/baskets/${basketID}/order`)
    return res.data
  } catch {
    return false
  }
}
