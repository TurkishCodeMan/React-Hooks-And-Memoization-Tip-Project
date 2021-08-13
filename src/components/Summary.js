import styled from "@emotion/styled";
import { memo } from "react";
import { toCurrency } from "../utilities";
import { useSummary } from "./hooks/useSummary";
import { Box } from "./sharedCSS/shared"

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
    const { subTotal, tipAmount, total } = useSummary();
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