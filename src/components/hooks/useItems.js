import { useSelector } from "react-redux"
import { useActions } from "./useActions";

export const useItems = (actions) => {
    const items = useSelector(state => state.items);
    const bindActions = useActions({ ...actions });

    return { items, bindActions };
};
