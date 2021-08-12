import styled from "@emotion/styled";
import { memo } from "react";
import { toCurrency } from "../utilities";
import { removeItem, updatePrice, updateQuantity } from "../store/items/actions"
import { useActions } from "./hooks/useActions";
import { useSummary } from "./hooks/useSummary";
import { useSelector } from "react-redux";
import { selectItemTotal } from "../store/items/selectors";
const MenuItemContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
const ShowArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 6px;
`;

const InputArea = styled.input`
    padding: 4px 6px;
   
`;

const Name = styled.p`
    color: rebeccapurple;
`;


const MenuItem = memo(function MenuItem({
    id,
    name,
    price,
    quantity = 1,
}) {
    const items = useSelector(state => state.items);
    const itemActions = useActions({ removeItem, updatePrice, updateQuantity });
    const selectItemTotall = selectItemTotal(items, { id: id })

    return (
        <MenuItemContainer>
            <ShowArea>
                <Name>{name}</Name>
                <InputArea
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => itemActions.updatePrice(id, e.target.value)}
                />
            </ShowArea>
            <ShowArea>
                <p>Quantity</p>
                <InputArea
                    type="number"
                    value={quantity}
                    data-testid="quantity"
                    onChange={e => itemActions.updateQuantity(id, e.target.value)}
                />
            </ShowArea>
            <ShowArea>
                <p>Total</p>
                <span >{toCurrency(selectItemTotall)}</span>
            </ShowArea>
            <button onClick={e => itemActions.removeItem(id)}>Remove</button>
        </MenuItemContainer>
    )
});

export default MenuItem;