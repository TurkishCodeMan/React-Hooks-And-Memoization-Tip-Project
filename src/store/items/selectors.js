import { createSelector } from "reselect";


export const selectItems = createSelector((state) => state.items, (items) => items);
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

export const selectItemTotal = (price, quantity) => {
    console.log(price, quantity)
    return price * quantity;
}