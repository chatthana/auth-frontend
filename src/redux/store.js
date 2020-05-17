import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers';

export default (initialState = {}) => {

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.runSaga = () => {
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.runSaga();

  return store;
}