import { expect, test } from "@jest/globals";
import { useItems } from "../hooks/useItems";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from "../../store";
import { addItem } from "../../store/items/actions";

const wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)
test("gives an state items", async () => {
    const { result } = renderHook(() => useItems({ addItem }), { wrapper });
    const { items, bindActions } = result.current;
    expect(items).toHaveLength(1);
    expect(bindActions).toBeInstanceOf(Object);
    expect(bindActions.addItem).toBeInstanceOf(Function);
})