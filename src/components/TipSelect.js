import styled from "@emotion/styled";
import { memo } from "react";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useActions";
import { Box } from "./sharedCSS/shared";

import { tipSelectUpdate } from "../store/tipSelect/actions"

const Select = styled.select`
    width: 100%;
`;

const TipSelect = memo(function TipSelect() {
    const tipPercentage = useSelector(state => state.tipPercentage);
    const actions = useActions({ tipSelectUpdate });

    return (
        <Box>
            <label>Tip Select</label>
            <Select
                value={tipPercentage}
                onChange={e => actions.tipSelectUpdate(e.target.value)}
            >
                <option key={15} value={15}>15%</option>
                <option key={20} value={20}>20%</option>
                <option key={25} value={25}>25%</option>
            </Select>
        </Box>
    )
})


export default TipSelect;