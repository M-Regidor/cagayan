import { createSelector } from 'reselect';
import { getProducts } from "../utils/product.api.util"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const fetchProducts = () => async (dispatch) => {
    const res = await getProducts();

    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveProducts(data))
    } else {
        data = await res.json()
    }

}
export const selectProducts = state => state.values

export const selectProductsArray = createSelector(selectProducts, product => Object.values(product));

const productReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products}
        default:
            return state
    }
}

export default productReducer