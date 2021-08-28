import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { useCallback, useMemo } from "react";

export const useActions = (actions) => {
    const dispatch = useDispatch();
    return useMemo(() =>
        bindActionCreators(actions, dispatch)
        , [actions, dispatch]);
    //Aynı actions ve dispatch kullanılırsa yeniden oluşturma
}