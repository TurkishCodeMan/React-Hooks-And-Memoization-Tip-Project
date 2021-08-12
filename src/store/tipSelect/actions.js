export const TIP_SELECT_UPDATE = "TIP_SELECT_UPDATE";

export const tipSelectUpdate = (tipSelect) => {
    return {
        type: TIP_SELECT_UPDATE,
        payload: {
            tipSelect
        }
    }
}