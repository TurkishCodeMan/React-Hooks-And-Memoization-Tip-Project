import { produce } from "immer"
import {
    ITEM_ADDED,
    ITEM_PRICE_UPDATE,
    ITEM_QUANTITY_UPDATE,
    ITEM_REMOVED
} from "./actions";
import { selectItem } from "./selectors";

let id = 1;

const initialState = [
    { id: id++, name: 'Sucuk', price: 36, quantity: 1 },
];


export const itemsReducer = produce((state, action) => {
    if (action.type === ITEM_ADDED) {
        const item = { id: id++, quantity: 1, ...action.payload };
        state.push(item);
    }
    if (action.type === ITEM_REMOVED) {
        return state.filter(item => item.id !== action.payload.id)
    }
    if (action.type === ITEM_PRICE_UPDATE) {
        const item = selectItem(state, action.payload);
        item.price = parseInt(action.payload.price);
    }
    if (action.type === ITEM_QUANTITY_UPDATE) {
        const item = selectItem(state, action.payload);
        item.quantity = parseInt(action.payload.quantity);
    }
}, initialState)