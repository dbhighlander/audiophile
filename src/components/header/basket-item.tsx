import React, { useEffect, useRef, useState } from "react";
import Header from "./header";
import QtyInput from "../common/elements/qty";


const BasketItem = () => {
    
    return (
        <div className="basket__item">
            <img className="basket__item__image" />
            <div className="basket__item__info">
            <QtyInput />
            </div>
        </div>
    )

}

export default BasketItem