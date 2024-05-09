import React from "react";

import { observer } from "mobx-react";

import store from "./mobx/store";

const Cart = observer(() => {

    return (
        <div>
            <h2>Cart:</h2>
            <ul>
                {store.cart.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                        <button onClick={() => store.removeItemFromCart(item.id)}>REMOVE</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: {store.totalPrice}</p>
        </div>
    )

});


export default Cart;