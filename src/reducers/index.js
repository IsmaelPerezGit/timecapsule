import stories from './stories';
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    stories
});
export default rootReducer;
