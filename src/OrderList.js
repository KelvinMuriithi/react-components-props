import React from "react";
import Order from "./Order";

function OrderList(){
    return(
        <div>
           <h1>Orders</h1> 
           <Order name="Iphone-15" orderNumber={1}/>
        </div>
    )
}

export default OrderList;