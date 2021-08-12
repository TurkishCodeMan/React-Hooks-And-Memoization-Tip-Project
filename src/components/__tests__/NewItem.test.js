import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import NewItem from "../NewItem";

test("new item send test", async () => {
    const newItemForm = render(<NewItem />);
    const name = await newItemForm.findByTestId("name");

    name.value = 'deneme';

    const send = await newItemForm.findByTestId("send");

    send.click();

    expect(name.value).toContain("")
})