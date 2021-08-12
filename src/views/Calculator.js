import NewItem from "../components/NewItem";
import MenuItems from "../components/MenuItems";
import { Header } from "./CalculatorCSS";
import TipSelect from "../components/TipSelect";
import Summary from "../components/Summary";
import { useItems } from "../components/hooks/useItems";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { tipSelectUpdate } from "../store/tipSelect/actions"
import { useActions } from "../components/hooks/useActions";
import { useSummary } from "../components/hooks/useSummary";

function Calculator() {



    return (
        <div>
            <Header >Tip Calculator</Header>
            <NewItem />
            <MenuItems />
            <TipSelect />
            <Summary />
        </div>
    )
}

export default Calculator;