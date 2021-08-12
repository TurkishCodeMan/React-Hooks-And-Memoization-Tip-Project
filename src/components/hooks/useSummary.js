import { useSelector } from "react-redux";
import { selectSubTotal, selectTipAmount, selectTotal } from "../../store/items/selectors";

export const useSummary = () => {
    const state = useSelector(state => state);
    const subTotal = selectSubTotal(state);
    const tipAmount = selectTipAmount(state);
    const total = selectTotal(state);


    return { subTotal, tipAmount, total };
}