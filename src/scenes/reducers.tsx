/* ********       IMPORTS       ******** */
import {combineReducers} from 'redux';
import reducer from './App/reducer';
/* ********      VARIABLES      ******** */
const appReducer = combineReducers({
    appReducer: reducer,
});

/* ********       EXPORTS       ******** */
export default appReducer;
