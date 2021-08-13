import styled from "@emotion/styled";
import { memo } from "react";
import { useItems } from "./hooks/useItems";
import MenuItem from "./MenuItem";

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

const MenuItems = memo(function MenuItems() {

    var { items } = useItems();


    if (!(items && items.length > 0)) {
        items = [];
    }

    return (
        <ItemsContainer>
            {
                items.map(item => (
                    <MenuItem
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </ItemsContainer>
    )

})


export default MenuItems;