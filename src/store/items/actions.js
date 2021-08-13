export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
export const ITEM_PRICE_UPDATE = "ITEM_PRICE_UPDATE";
export const ITEM_QUANTITY_UPDATE = "ITEM_QUANTITY_UPDATE";
export const PET_ADDED = "PET_ADDED";

export const addItem = (name, price) => {
    return {
        type: ITEM_ADDED,
        payload: {
            name,
            price
        }
    }
}

export const addPet = (pets) => {
    return {
        type: PET_ADDED,
        payload: {
            ...pets
        }
    }
}

export const removeItem = (id) => {
    return {
        type: ITEM_REMOVED,
        payload: {
            id
        }
    }
}

export const updateQuantity = (id, quantity) => {
    return {
        type: ITEM_QUANTITY_UPDATE,
        payload: {
            id,
            quantity
        }
    }
}

export const updatePrice = (id, price) => {
    return {
        type: ITEM_PRICE_UPDATE,
        payload: {
            id,
            price
        }
    }
}