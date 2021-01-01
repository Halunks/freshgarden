import {SET_PRODUCTS_ALL, CREATE_NEW_PRODUCT, SET_PRODUCTS_SUBSET, SET_LOCATION_SUBSET} from '../../helpers/constants'

const initialState = {
    productsAll: [],
    newProduct: [],
    productsSubset: [],
}

export default function productReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_ALL: {
            const newState = {...state}
            newState.productsAll = action.payload
            newState.productsAll.reverse()
            newState.productsSubset = action.payload
            newState.productsAll.reverse()
            return newState
        }
        case SET_LOCATION_SUBSET: {
            const newState = {...state}
            newState.productsSubset = action.payload
            newState.productsAll.reverse()
            return newState
        }
        case SET_PRODUCTS_SUBSET: {
            const newState = {...state}
            if (action.payload && action.payload.length !== 0) {
                newState.productsSubset = action.payload
                newState.productsSubset.reverse()
                return newState
            } else if (action.payload.length !== 0) newState.productsSubset = []
            return newState
        }
        case CREATE_NEW_PRODUCT: {
            const newState = {...state}
            newState.newProduct = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
