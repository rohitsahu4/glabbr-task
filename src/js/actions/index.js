import {SET_PRODUCTS, } from "../constants/action-types";

const axios = require('axios').default;
export function setProducts(payload) {
    return {type: SET_PRODUCTS, payload}
}

export function loadProducts() {
    return (dispatch) => {
        return axios.get("http://www.mocky.io/v2/5e3156863200007200888450")
            .then(response => {
                dispatch(setProducts(response.data.plans));
                return Promise.resolve()
            }).catch(e=>e)
    }
}