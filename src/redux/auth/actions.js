export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const SIGNING_IN = 'SIGNIN_ERROR';
export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';

export const signin = (credentials) => ({
  type: SIGNIN_REQUEST,
  payload: credentials
});