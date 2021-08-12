import { useSelector } from "react-redux"
import { useActions } from "./useActions";
import { addItem } from "../../store/items/actions";

export const useItems = () => {
    const items = useSelector(state => state.items);
    const actions = useActions({ addItem });

    return { items, ...actions };
};
