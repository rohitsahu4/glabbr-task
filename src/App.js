import React, {useState} from 'react';
import Switch from "./components/Switch"
import {connect} from "react-redux";
import  Product from "./components/Product"
import "./css/App.css"
const mapStateToProps = state => {
    return {
        products: state.products,
        showYearly: state.showYearly
    };
};

function App({products}) {

   const [showYearly,setShowYearly] = useState(false);
    const toggleSetShowYearly = () => {
        setShowYearly(!showYearly);
    };
    const list = products.filter(p=>showYearly? p.interval==="year" : p.interval==="monthly");
    const discount = showYearly?15:0;
    let i =0;
    return (
        <div className="App">
            <div className={"toggle"}>
                <span onClick={()=>setShowYearly(false)}>MONTHLY</span>
                <Switch status={showYearly} onClick={toggleSetShowYearly}/>
                <span onClick={()=>setShowYearly(true)}>YEARLY</span>
            </div>
            <div className={"flex"}>
                {list.map(p=> (<Product product={p} key={i++} discount={discount}/>))}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(App);
