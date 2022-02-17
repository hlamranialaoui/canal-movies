/* ********       IMPORTS       ******** */
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

interface IWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
}

/* ********      VARIABLES      ******** */

const middlewares = [];
// middlewares.push(promiseMiddleware());
middlewares.push(thunk);
middlewares.push(logger);

/* ********  PRIVATE FUNCTIONS  ******** */

/* ********       EXPORTS       ******** */

export default createStore(reducers, applyMiddleware(...middlewares));
