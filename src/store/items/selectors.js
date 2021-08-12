import { createSelector } from "reselect";


export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectItem = (items, props) => {
    return items.find(item => item.id === props.id);
}

export const selectSubTotal = createSelector([selectItems], (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
})

export const selectTipAmount = createSelector([selectSubTotal, selectTipPercentage],
    (subTotal, tipPercentage) => {
        return subTotal * (tipPercentage / 100)
    });

export const selectTotal = createSelector([selectSubTotal, selectTipAmount], (subTotal, paidAmount) => {
    return subTotal + paidAmount;
})

export const selectItemTotal = createSelector([selectItem], (item) => {
    return item.price * item.quantity;
})