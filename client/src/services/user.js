import { api } from '../services/api-helper';

// AUTH for users
// login user:
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', {authentication: loginData})
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

// Verify:
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false;
}

// register user: (create)
export const registerUser = async(registerData) => {
  const resp = await api.post('/users', {user: registerData})
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  // const resp = req.data.user
  return resp.data
}

// get users: (index)
export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

// get one user: (get)
export const getOneUser = async (user_id) => {
  const resp = await api.get(`/users/${user_id}`)
  return resp.data
}

// update uset: (put)
export const updateUser = async (user_id, updateData) => {
  const resp = await api.put(`/users/${user_id}`, {user: updateData})
  return resp.data
}

// delete user:
export const deleteUser = async (user_id) => {
  const resp = await api.delete(`/users/${user_id}`)
  return resp.data
}