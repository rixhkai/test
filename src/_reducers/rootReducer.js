import {combineReducers} from 'redux';
import session from './sessionReducer';
import ArticlesReducer from './ArticlesReducer';
import CatReducer from './CatReducer';
import commentReducers from './commentReducers';

const rootReducer = combineReducers({
    session,
    ArticlesReducer,
    CatReducer,
    commentReducers
})

export default rootReducer;