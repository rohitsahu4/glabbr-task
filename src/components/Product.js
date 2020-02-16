import React, {useState} from "react"
import "../css/Product.css"
import Features from "./Features"
import AtomIcon from "./AtomIcon"
export default function ({product, discount, onClick,...props}) {
    console.log(props)
    //Calculating the final monthly price with discount
    const [pushed,setPushed] = useState(false);
    const price = Math.round((product.amount - product.amount * (discount / 100)) / 12);
const handleClick = ()=>{
    onClick();
    setPushed(true);
    setTimeout(()=>{
        setPushed(false);
    },400)
};
    return (
        <div {...props} className={ "product" + (pushed ?" product-pushed":"")} onClick={handleClick} >
            <AtomIcon planName={product.planName}/>
            <h3 className={product.planName}><strong>{product.planName}</strong>
            </h3>
            <p className="plan-description">{product.planDescription}</p>
            <div className={"amount"}>
                <span className={"currency-symbol"}>{product.currencySymbol}</span>
                <strong className={"price"}>{price}</strong>
                <span className={"per-month"}>{"/month"}</span>
            </div>
            <Features features={product.features}/>
        </div>
    )
}