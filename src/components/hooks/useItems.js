import { useSelector } from "react-redux"
import { selectItems } from "../../store/items/selectors";
import { useActions } from "./useActions";

export const useItems = (actions) => {
    const items = useSelector(selectItems);

    const bindActions = useActions({ ...actions });

    return { items, bindActions };
};
