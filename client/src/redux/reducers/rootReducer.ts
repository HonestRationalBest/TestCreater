import { combineReducers } from 'redux';
import createrReducer from './createrReducer';


const rootReducer = combineReducers({
    creater: createrReducer
})

export default rootReducer;