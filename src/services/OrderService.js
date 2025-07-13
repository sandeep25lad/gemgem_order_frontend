import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/orders/',
})

export function fetchOrders() {
  return api.get('/')
}

export function createOrder(orderData) {
  return api.post('/', orderData)
}

export function updateOrderStatus(order) {
  const payload = {
    status: order?.status,
  }
  return api.patch(`/${order?.id}`, payload)
}
