import * as actions from './actions';

const initialState = {
  token: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SIGNIN_SUCCESS:
      return { ...state, token: payload.token };
    default:
      return state;
  }
}