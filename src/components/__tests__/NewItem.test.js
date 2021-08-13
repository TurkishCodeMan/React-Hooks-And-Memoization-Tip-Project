import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import NewItem from "../NewItem";
import { Provider } from "react-redux";
import { store } from "../../store"

test("new item send test", async () => {
    const newItemForm = render(
        <Provider store={store}>
            <NewItem />
        </Provider>


    );
    const name = await newItemForm.findByTestId("name");

    name.value = 'deneme';

    const send = await newItemForm.findByTestId("send");

    send.click();

    expect(name.value).toContain("")
})