import { sign } from 'jsonwebtoken';

export const setToken = (token) => {
  localStorage.setItem('token', token);
}

export const signin = async () => {
  const token = sign({ userId: 1, email: 'test@dummy.co' }, '123456');
  setToken(token);
  return { token }
}