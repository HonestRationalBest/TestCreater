import { combineReducers } from 'redux';
import theoryReducer from './theoryReducer';


const rootReducer = combineReducers({
    theory: theoryReducer
})

export default rootReducer;