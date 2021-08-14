import { afterEach, expect, jest, test } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import Calculator from "../Calculator";
import React from "react"
import { renderHook } from "@testing-library/react-hooks";
import * as mockReducer from '../../store/items/reducer';
import { createRenderer } from "react-test-renderer/shallow";



const flushPromises = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    })
}
const wrapper = ({ children }) => (
    <Provider store={store}><Calculator /></Provider>
)
afterEach(cleanup);

test("Clcltor", async () => {
    const mock = jest.fn().mockReturnValue(() => ({ pets: [{ a: "bbb" }] }));
    mockReducer.getAllPets = mock;
    renderHook(() => useEffect(), { wrapper });
    await flushPromises();
    expect(mockReducer.getAllPets).toBeCalledTimes(1);
    expect(mockReducer.getAllPets).toBeCalledWith();
})

test("calculator snapshot", async () => {
    const r = createRenderer();
    r.render(<Provider store={store}><Calculator /></Provider>)
    expect(r.getRenderOutput()).toMatchSnapshot();
})