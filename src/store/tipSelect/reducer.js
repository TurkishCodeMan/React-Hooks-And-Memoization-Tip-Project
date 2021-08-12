import { produce } from "immer"
import { TIP_SELECT_UPDATE } from "./actions";

const initialTipPercentage = 20;
export const tipPercentageReducer = produce((state, action) => {
    if (action.type === TIP_SELECT_UPDATE) {
        return parseInt(action.payload.tipSelect, 10);
    }
}, initialTipPercentage)