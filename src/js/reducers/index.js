import {SET_PRODUCTS} from "../constants/action-types";

const initialState = {
    products: [],
    showYearly: false
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_PRODUCTS) {
        return {...state, ...{products: action.payload}}
    }
   else
       return state
}


export default rootReducer;