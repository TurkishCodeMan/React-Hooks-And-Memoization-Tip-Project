import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import store from "../../store";
import { useActions } from "../hooks/useActions";
import { addItem } from "../../store/items/actions"


const wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)

test("Actions Get Test", async () => {
    const { result } = renderHook(() => useActions({ addItem }), { wrapper });
    const actions = result.current;
    expect(actions).toHaveProperty("addItem");

})