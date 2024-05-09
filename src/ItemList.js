import React from "react";  

import { observer } from "mobx-react";

import store from './mobx/store';


const ItemList = observer(() => {

    return (
        <div>
            <h2>Available Items:</h2>
            <ul>
                {store.items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                        <button onClick={() => store.addItemToCart(item)}>
                            ADD TO CART
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    )

});

export default ItemList;