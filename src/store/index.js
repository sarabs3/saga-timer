import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';
import { watch } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(watch)

//setInterval(() => store.dispatch({type:`my action ${Math.random() * 10}`}), 2000);

export default store
