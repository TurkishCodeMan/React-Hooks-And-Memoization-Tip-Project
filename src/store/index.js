import { combineReducers, createStore, applyMiddleware } from 'redux';
import { itemsReducer } from './items/reducer';
import { tipPercentageReducer } from './tipSelect/reducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    items: itemsReducer,
    tipPercentage: tipPercentageReducer
})
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(
    reducer,
    composedEnhancer
);

export default store;