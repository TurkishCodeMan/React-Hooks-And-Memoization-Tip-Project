import { expect, test } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import MenuItem from "../MenuItem";
import { Provider } from "react-redux";
import { store } from "../../store"
import * as  mockAction from "../../store/items/actions"
import * as  mockSelectors from "../../store/items/selectors"

afterAll(cleanup);

test("display default quantity must 1", async () => {
    const mockRemoveItem = jest.fn().mockReturnValue((id) => ({}));
    const mockSelectItemTotalValue = jest.fn().mockReturnValue((id) => ({}));

    mockAction.removeItem = mockRemoveItem;
    mockSelectors.selectItemTotal = mockSelectItemTotalValue;
    const item = {
        id: 44,
        name: 'a',
        price: 4,
        quantity: 1,
    }
    const { container, getByText, getByTestId } = render(
        <Provider store={store}>
            <MenuItem {...item} />
        </Provider>
    );
    const quantity = getByTestId("quantity");
    const removeButton = getByText("Remove");
    removeButton.click();

    expect(quantity.value).toContain(1);
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
    expect(mockRemoveItem).toHaveBeenCalledWith(44);

})