import styled from "@emotion/styled";
import { memo } from "react";
import { selectItemTotal } from "../store/items/selectors";
import { toCurrency } from "../utilities";


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
    removeItem,
    updatePrice,
    updateQuantity,
}) {

    const selectSubTotalValue = selectItemTotal(price, quantity);

    console.log("render menu ıtem", name)
    return (
        <MenuItemContainer>
            <ShowArea>
                <Name>{name}</Name>
                <InputArea
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => updatePrice(id, e.target.value)}
                />
            </ShowArea>
            <ShowArea>
                <p>Quantity</p>
                <InputArea
                    type="number"
                    value={quantity}
                    data-testid="quantity"
                    onChange={e => updateQuantity(id, e.target.value)}
                />
            </ShowArea>
            <ShowArea>
                <p>Total</p>
                <span >{toCurrency(selectSubTotalValue)}</span>
            </ShowArea>
            <button onClick={() => removeItem(id)}>Remove</button>
        </MenuItemContainer>
    )
});

export default MenuItem;