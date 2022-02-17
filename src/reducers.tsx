/* ********       IMPORTS       ******** */
import {combineReducers} from 'redux';
import app from './scenes/reducers';

/* ********      VARIABLES      ******** */
const reducers = combineReducers({
    app,
});

export default reducers;
