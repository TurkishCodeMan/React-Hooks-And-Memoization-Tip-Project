import styled from "@emotion/styled";
import { memo, useCallback } from "react";
import { useItems } from "./hooks/useItems";
import MenuItem from "./MenuItem";
import { removeItem, updatePrice, updateQuantity } from "../store/items/actions"
import { useDispatch } from "react-redux";

const ItemsContainer = styled.div`
    width: 100%;
    background-color: #fafafa;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

const MenuItems = function MenuItems() {

    var { items } = useItems();
    const dispatch = useDispatch();

    var updatePriced = useCallback((id, price) => {
        dispatch(updatePrice(id, price))
    }, [dispatch])
    var updateQuantitied = useCallback((id, quantity) => {
        dispatch(updateQuantity(id, quantity))
    }, [dispatch])
    var removed = useCallback((id) => {
        dispatch(removeItem(id))
    }, [dispatch])

    if (!(items && items.length > 0)) {
        items = [];
    }
    console.log("render menu ıtems", items)
    return (
        <ItemsContainer>
            {
                items.map(item => (
                    <MenuItem
                        key={item.id}
                        {...item}
                        updatePrice={updatePriced}
                        updateQuantity={updateQuantitied}
                        removeItem={removed}
                    />
                ))
            }
        </ItemsContainer>
    )

}


export default MenuItems;