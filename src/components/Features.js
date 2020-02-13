import React from "react"
import "../css/Product.css"

export default function ({features}) {
    let i =0
    return <div>
        {features.map(ft => (
            <div key={i++}>
                <span className="check-mark">✔</span><span className={"feature-description"}>{ft}</span>
            </div>
        ))}
    </div>
};