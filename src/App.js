import React, {useState} from 'react';
import Switch from "./components/Switch"
import {connect} from "react-redux";
import Product from "./components/Product"
import "./css/App.css"
import axios from "axios";

const mapStateToProps = state => {
    return {
        products: state.products,
        showYearly: state.showYearly
    };
};

function App({products}) {
    const handleClick = (data)=>{
         axios.post("https://webhook.site/1cd8ea5a-46ac-4768-95a1-3fe8e189bbba",data)
    };
   const [showYearly, setShowYearly] = useState(false);
    const toggleSetShowYearly = () => {
        setShowYearly(!showYearly);
    };
    const list = products.filter(p => showYearly ? p.interval === "year" : p.interval === "monthly");
    const discount = showYearly ? 15 : 0;
    let i = 0;
    return (
        <div className="App">
            <div className={"toggle"}>
                <span onClick={() => setShowYearly(false)}>MONTHLY</span>
                <Switch status={showYearly} onClick={toggleSetShowYearly}/>
                <span onClick={() => setShowYearly(true)}>YEARLY</span>
            </div>
            <div className={"flex"}>
                {list.map(p => (<Product product={p} key={i++} onClick={handleClick} discount={discount}/>))}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(App);
