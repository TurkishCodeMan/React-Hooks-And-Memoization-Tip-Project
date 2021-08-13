import { expect, test } from "@jest/globals";
import { useItems } from "../hooks/useItems";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from "../../store"

const wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)
test("gives an state items", async () => {
    const { result } = renderHook(() => useItems(), { wrapper });
    const { items, addItem } = result.current;
    expect(items).toHaveLength(1);
    expect(addItem).toBeInstanceOf(Function);
})