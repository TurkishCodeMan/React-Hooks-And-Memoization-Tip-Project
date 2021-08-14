import { expect, test, jest } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import NewItem from "../NewItem";
import { Provider, } from "react-redux";
import { Simulate } from "react-dom/test-utils";
import * as  mockAction from "../../store/items/actions"
import store from "../../store";
import React from "react";

afterAll(cleanup);

const flushPromises = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    })
}

test("new item send test initial state sending", async () => {
    const mockAddItem = jest.fn().mockReturnValue((name, price) => ({}));

    const initialStateForFirstUseStateCall = 'aa'
    const initialStateForSecondUseStateCall = 4989

    React.useState = jest.fn()
        .mockReturnValueOnce([initialStateForFirstUseStateCall, jest.fn()])
        .mockReturnValueOnce([initialStateForSecondUseStateCall, jest.fn()])

    mockAction.addItem = mockAddItem;

    const { container, getByLabelText, getByText } = render(
        <Provider store={store}>
            <NewItem />
        </Provider>
    );
    const send = await getByText("Send")

    Simulate.click(send);
    await flushPromises();
    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith(initialStateForFirstUseStateCall, initialStateForSecondUseStateCall);
})
