import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import MenuItem from "../MenuItem";

test("display default quantity must 1", async () => {
    const menuItem = render(
        <MenuItem />
    );
    const quantity = await menuItem.findByTestId("quantity");


    expect(quantity.value).toContain(1);
})