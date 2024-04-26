import React from "react";

function Order({name, orderNumber}){
    return (
        <div>
        <h2>{name}</h2>
        <p>Order no: ${orderNumber}</p>
      </div>
    )
}

export default Order;