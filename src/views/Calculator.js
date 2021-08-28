import NewItem from "../components/NewItem";
import MenuItems from "../components/MenuItems";
import TipSelect from "../components/TipSelect";
import Summary from "../components/Summary";

import { getAllPets } from "../store/items/reducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Calculator() {

    const dispatch = useDispatch();

    async function getAPICall() {
        const fetchPets = getAllPets();
        await dispatch(fetchPets);
    }

    useEffect(() => {
        getAPICall();
    }, [])
    console.log("CALCULATOR RENDER")
    return (
        <div>

            <NewItem />
            <MenuItems />
            <TipSelect />
            <Summary />
        </div>
    )
}

export default Calculator;