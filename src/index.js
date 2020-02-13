import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App";
import {loadProducts} from "./js/actions";

store.dispatch(loadProducts()).catch(()=>{
    alert("Connection Error, Please Check your Internet Connection")
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);