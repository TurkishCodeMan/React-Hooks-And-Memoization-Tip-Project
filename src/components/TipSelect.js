import styled from "@emotion/styled";
import { Box } from "./sharedCSS/shared";
import { tipSelectUpdate } from "../store/tipSelect/actions"
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const Select = styled.select`
    width: 100%;
`;

const TipSelect = function TipSelect() {
    const dispatch = useDispatch();

    //Bu değiştiği için rerender tipUpdate değişmedi !!
    const tipPercentage = useSelector(state => state.tipPercentage);
    const tipUpdate = useCallback((tip) => {
        return dispatch(tipSelectUpdate(tip));
    });

    console.log("render tip slect")
    return (
        <Box>
            <label htmlFor="select">Tip Select</label>
            <Select
                id="select"
                value={tipPercentage}
                onChange={e => tipUpdate(e.target.value)}
            >
                <option key={15} value={15}>15%</option>
                <option key={20} value={20}>20%</option>
                <option key={25} value={25}>25%</option>
            </Select>
        </Box>
    )
}


export default TipSelect;