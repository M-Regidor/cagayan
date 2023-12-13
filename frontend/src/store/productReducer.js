import { createSelector } from 'reselect';
import { getProducts, getProduct } from "../utils/product.api.util"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const receiveProductInfo = product => ({
    type: RECEIVE_PRODUCT,
    product
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

export const fetchProduct = productId => async (dispatch) => {
    const res = await getProduct(productId);

    let data;
    if (res.ok){
        data = await res.json()
        dispatch(receiveProductInfo(data))
    } else {
        data = await res.json()
        console.log(data)
    }

}




export const selectProducts = state => state.products
export const selectProduct = productId => state => state.products[productId]


export const selectProductsArray = createSelector(selectProducts, product => 
    Object.values(product)
);

const productReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products}
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        default:
            return state
    }
}

export default productReducer