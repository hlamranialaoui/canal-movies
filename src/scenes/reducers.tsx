/* ********       IMPORTS       ******** */
import {combineReducers} from 'redux';
import reducer from './App/reducer';
/* ********      VARIABLES      ******** */
const reducers = combineReducers({
    appReducer: reducer,
});

/* ********       EXPORTS       ******** */
export default reducers;
