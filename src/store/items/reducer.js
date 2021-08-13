import { produce } from "immer"
import {
    ITEM_ADDED,
    ITEM_PRICE_UPDATE,
    ITEM_QUANTITY_UPDATE,
    ITEM_REMOVED, addPet, PET_ADDED
} from "./actions";
import { selectItem } from "./selectors";

let id = 1;

const initialState = [
    { id: id++, name: 'Sucuk', price: 36, quantity: 1 },
];


export function getAllPets() {
    return async function fetchPets(dispatch) {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?`
        );
        const json = await res.json();
        return dispatch(addPet(json.pets[0]))

    }
}


export const itemsReducer = produce((state, action) => {
    if (action.type === ITEM_ADDED) {
        const item = { id: id++, quantity: 1, ...action.payload };
        state.push(item);
    }
    if (action.type === PET_ADDED) {
        const pet = { ...action.payload, id: 999, price: 10, quantity: 1 };
        state.push(pet);
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