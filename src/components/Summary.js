import styled from "@emotion/styled";
import { memo } from "react";
import { toCurrency } from "../utilities";
import { Box } from "./sharedCSS/shared"
import { useSelector } from "react-redux";
import { selectSubTotal, selectTipAmount, selectTotal } from "../store/items/selectors";

const FlexRight = styled.div`
display: flex;
justify-content: right;
flex-direction: column;
align-items: flex-end;
`;

const SummaryLine = styled.p`
    background-color: #daaaaa;
    width: 100%;
    text-align:end;
    padding: 4px 8px;
`;

const Summary = memo(function Summary() {
    const subTotal = useSelector(selectSubTotal);
    const tipAmount = useSelector(selectTipAmount);
    const total = useSelector(selectTotal);
    return (
        <Box>
            <FlexRight>
                <SummaryLine subTotal={subTotal} data-testid="subTotal">SubTotal: {toCurrency(subTotal)}</SummaryLine>
                <SummaryLine data-testid="tipAmount">TipAmount: {toCurrency(tipAmount)}</SummaryLine>
                <SummaryLine data-testid="total">Total: {toCurrency(total)}</SummaryLine>
            </FlexRight>
        </Box>

    )
})




export default Summary;