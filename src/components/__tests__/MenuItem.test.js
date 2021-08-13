import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import MenuItem from "../MenuItem";
import { Provider } from "react-redux";
import { store } from "../../store"

test("display default quantity must 1", async () => {
    const item = {
        id: 1,
        name: 'a',
        price: 4,
        quantity: 1,
    }
    const menuItem = render(
        <Provider store={store}>
            <MenuItem {...item} />
        </Provider>
    );
    const quantity = await menuItem.findByTestId("quantity");


    expect(quantity.value).toContain(1);
})