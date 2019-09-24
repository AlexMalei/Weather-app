import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index.js';
import rootSaga from '../sagas/index.js';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(prelodedState) {
  const store = createStore(
    rootReducer,
    prelodedState,
    applyMiddleware(loggerMiddleware, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
