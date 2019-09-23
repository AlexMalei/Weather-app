import { createStore, applyMiddleware } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(prelodedState) {
  return createStore(
    rootReducer,
    prelodedState,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  );
}

sagaMiddleware.run(rootSaga);
